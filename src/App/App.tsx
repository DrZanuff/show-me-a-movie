import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { generateInitialQuestions } from '@/helpers/generateInitialQuestions'
import type { SupportedLanguages } from '@/languages/languages'
import { QuestionForm } from '@/components/QuestionForm'
import { RecommendationResults } from '@/components/RecommendationResults'
import { AnsweredFieldQuestion } from '@/components/QuestionForm/QuestionForm.types'
import { Header } from '@/components/Header'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import type { FieldQuestion, Recommendation, CurrentView } from './App.types'
import './App-styles.css'

export function App() {
  const { i18n } = useTranslation()
  const [currentView, setCurrentView] = useState<CurrentView>('Form')
  const [recommendation, setRecommendation] = useState<Recommendation>()
  const [questions, setQuestions] = useState<FieldQuestion[]>(
    generateInitialQuestions(i18n.language as SupportedLanguages)
  )
  const [answeredQuestionList, setAnsweredQuestionList] = useState<
    AnsweredFieldQuestion[]
  >([])

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Header />
        {currentView === 'Form' && (
          <QuestionForm
            questions={questions}
            setQuestions={setQuestions}
            setRecommendation={setRecommendation}
            setCurrentView={setCurrentView}
            setAnsweredQuestionList={setAnsweredQuestionList}
          />
        )}
        {currentView === 'Result' && recommendation && (
          <RecommendationResults
            recommendation={recommendation}
            questionList={answeredQuestionList}
            setRecommendation={setRecommendation}
          />
        )}
      </CardContent>
    </Card>
  )
}
