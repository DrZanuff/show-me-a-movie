import './App-styles.css'
import TextField from '@mui/material/TextField'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { generateInitialQuestions } from '@/helpers/generateInitialQuestions'
import { QuestionField } from '@/components/QuestionField'
import get from 'lodash/get'
import type { SupportedLanguages } from '@/languages/languages'
import type {
  AppProps,
  FieldQuestion,
  AnsweredFieldQuestion,
} from './App.types'
import { generateQuestionsAsText } from '@/helpers/generateQuestionsAsText'
import { generateRequestMoviePrompt } from '@/helpers/generateRequestMoviePrompt'

export function App({ value }: AppProps) {
  const { t, i18n } = useTranslation()
  const [questions, setQuestions] = useState<FieldQuestion[]>(
    generateInitialQuestions(i18n.language as SupportedLanguages)
  )

  const handleSubmit = (event: React.FormEvent) => {
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

    console.log('DBG::', { prompt, questionsAsText, questionList })
  }

  return (
    <div className={'App-container'}>
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
