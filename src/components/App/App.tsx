import type { AppProps, FieldQuestion } from './App.types'
import './App-styles.css'
import TextField from '@mui/material/TextField'
import { useState } from 'react'
import { useTranslation, use } from 'react-i18next'
import { generateInitialQuestions } from '@/helpers/generateInitialQuestions'
import type { SupportedLanguages } from '@/languages/languages'

export function App({ value }: AppProps) {
  const { t, i18n } = useTranslation()
  const [questions, setQuestions] = useState<FieldQuestion[]>(
    generateInitialQuestions(i18n.language as SupportedLanguages)
  )

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    // Get the current values directly from event.target
    const formData = event.currentTarget as HTMLFormElement

    console.log('DBG:', { formData })

    // for (let i = 0; i < questions.length; i++) {
    //   const questionId = 'question' + (i + 1)

    //   const questionText = formData?.[questionId]?.value
    //   const option1 = formData?.[questionId + '-option1']?.value
    //   const option2 = formData?.[questionId + '-option2']?.value
    //   const option3 = formData?.[questionId + '-option3']?.value
    //   const option4 = formData?.[questionId + '-option4']?.value
    //   const correctQuestion =
    //     formData?.[questionId + '-correctOption' + (i + 1)]?.value

    //   questionList.push({
    //     text: questionText,
    //     correctQuestion,
    //     options: [
    //       { text: option1 },
    //       { text: option2 },
    //       { text: option3 },
    //       { text: option4 },
    //     ],
    //   })
    // }

    // const username = (form.elements.namedItem('username') as HTMLInputElement).value;
    // const email = (form.elements.namedItem('email') as HTMLInputElement).value;

    // console.log('Form submitted with:', { username, email });

    // You can perform any API call or other operations here
  }

  return (
    <div className={'App-container'}>
      <form onSubmit={handleSubmit}>
        {/* {questions.map( question => <input></input>)} */}

        <div>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username" // Use the name attribute to access the field via form.elements
            type="text"
            defaultValue="" // Set initial value
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email" // Use the name attribute to access the field via form.elements
            type="email"
            defaultValue="" // Set initial value
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
