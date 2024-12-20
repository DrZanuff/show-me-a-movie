import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { QuestionField } from '@/components/QuestionField'
import get from 'lodash/get'
import type { SupportedLanguages } from '@/languages/languages'
import { generateQuestionsAsText } from '@/helpers/generateQuestionsAsText'
import { generateRequestMoviePrompt } from '@/helpers/generateRequestMoviePrompt'
import { generateMoreQuestionsPrompt } from '@/helpers/generateMoreQuestionsPrompt'
import { model } from '@/services/geminiApi'
import { extractResultObject } from '@/helpers/extractResultObject'
import Button from '@mui/lab/LoadingButton'
import toast from 'react-hot-toast'
import type {
  QuestionFormProps,
  AnsweredFieldQuestion,
  FieldQuestion,
} from './QuestionForm.types'
import './QuestionForm-styles.css'

export function QuestionForm({
  questions,
  setQuestions,
  setCurrentView,
  setRecommendation,
}: QuestionFormProps) {
  const { t, i18n } = useTranslation()
  const lang = i18n.language as SupportedLanguages
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = useCallback(
    async (event: React.FormEvent) => {
      event.preventDefault()
      setIsLoading(true)
      const formData = event.currentTarget as HTMLFormElement

      const questionList: AnsweredFieldQuestion[] = []

      for (let i = 0; i < questions.length; i++) {
        const questionId = `question-${i}`
        const question = questions[i]
        const answer = get(formData, `${questionId}.value`)

        if (answer) {
          questionList.push({
            text: question.text,
            answer,
          })
        }
      }

      const questionsAsText = generateQuestionsAsText(questionList)
      const prompt = generateRequestMoviePrompt(lang, {
        questionText: questionsAsText,
      })

      const result = await model.generateContent(prompt)

      if (!result?.response) {
        toast.error(`${t('something-wrong')} - Code: 1xA`)
        console.error('ERROR:', { result })
        setIsLoading(false)
        return
      }

      const resultText = result.response.text()

      const suggestion = extractResultObject(resultText)

      if (!suggestion) {
        toast.error(`${t('something-wrong')} - Code: 1xB`)
        console.error('ERROR:', { suggestion, resultText })
        setIsLoading(false)
        return
      }

      setIsLoading(false)
      setRecommendation(suggestion)
      setCurrentView('Result')
    },
    [lang, setRecommendation, setCurrentView, questions, t]
  )

  const handleLoadMoreQuestions = useCallback(async () => {
    setIsLoading(true)
    const prompt = generateMoreQuestionsPrompt(lang, { questions })
    const result = await model.generateContent(prompt)

    if (!result?.response) {
      toast.error(`${t('something-wrong')} - Code: 2xA`)
      setIsLoading(false)
      return
    }

    const resultText = result.response.text()

    const newQuestions: FieldQuestion[] = extractResultObject(
      result.response.text()
    )

    if (!newQuestions) {
      toast.error(`${t('something-wrong')} - Code: 2xB`)
      console.error('ERROR:', { newQuestions, resultText })
      setIsLoading(false)
      return
    }

    setQuestions([...questions, ...newQuestions])

    setIsLoading(false)
  }, [lang, questions, setQuestions, t])

  return (
    <div className={'QuestionForm-container'}>
      <form onSubmit={handleSubmit}>
        {questions.map((question, idx) => {
          const fieldId = `question-${idx}`

          return (
            <QuestionField
              key={fieldId}
              id={fieldId}
              name={fieldId}
              required={idx === 0}
              text={question.text}
              placeholder={question.placeholder}
              disabled={isLoading}
            />
          )
        })}

        <div className="Buttons-container">
          <Button
            variant="contained"
            size="small"
            loading={isLoading}
            onClick={handleLoadMoreQuestions}
            sx={{ mb: '10px' }}
            color="secondary">
            {t('load-more-questions')}
          </Button>

          <Button
            type="submit"
            variant="contained"
            size="small"
            fullWidth
            loading={isLoading}>
            {t('submit-button-text')}
          </Button>
        </div>
      </form>
    </div>
  )
}
