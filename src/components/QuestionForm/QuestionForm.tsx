import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { QuestionField } from '@/components/QuestionField'
import get from 'lodash/get'
import type { SupportedLanguages } from '@/languages/languages'
import { generateQuestionsAsText } from '@/helpers/generateQuestionsAsText'
import { generateRequestMoviePrompt } from '@/helpers/generateRequestMoviePrompt'
import { model } from '@/services/geminiApi'
import { extractRecommendationObject } from '@/helpers/extractRecommendationObject'
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

  const handleSubmit = useCallback(
    async (event: React.FormEvent) => {
      event.preventDefault()

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
      const prompt = generateRequestMoviePrompt(
        i18n.language as SupportedLanguages,
        {
          questionText: questionsAsText,
        }
      )

      const result = await model.generateContent(prompt)

      if (!result?.response) {
        return
      }

      const suggestion = extractRecommendationObject(result.response.text())

      if (!suggestion) {
        return
      }
      console.log('DBG::', {
        suggestion,
        prompt,
        questionsAsText,
        questionList,
        result: result.response.text(),
      })
      setRecommendation(suggestion)
      setCurrentView('Result')
    },
    [i18n.language, setRecommendation, setCurrentView, questions]
  )

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
            />
          )
        })}

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
