import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { generateInitialQuestions } from '@/helpers/generateInitialQuestions'
import type { SupportedLanguages } from '@/languages/languages'
import { QuestionForm } from '@/components/QuestionForm'
import { RecommendationResults } from '@/components/RecommendationResults'
import type { FieldQuestion, Recommendation, CurrentView } from './App.types'
import './App-styles.css'

export function App() {
  const { t, i18n } = useTranslation()
  const [currentView, setCurrentView] = useState<CurrentView>('Form')
  const [recommendation, setRecommendation] = useState<Recommendation>()
  const [questions, setQuestions] = useState<FieldQuestion[]>(
    generateInitialQuestions(i18n.language as SupportedLanguages)
  )

  console.log('DBG: APP', { recommendation, currentView })

  return (
    <div className={'App-container'}>
      {currentView === 'Form' && (
        <QuestionForm
          questions={questions}
          setQuestions={setQuestions}
          setRecommendation={setRecommendation}
          setCurrentView={setCurrentView}
        />
      )}
      {currentView === 'Result' && recommendation && (
        <RecommendationResults recommendation={recommendation} />
      )}
    </div>
  )
}
