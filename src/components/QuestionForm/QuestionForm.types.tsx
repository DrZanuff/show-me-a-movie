import { CurrentView, Recommendation } from '@/App/App.types'

export type FieldQuestion = {
  text: string
  placeholder: string
}

export type AnsweredFieldQuestion = {
  text: string
  answer?: string
}

export interface QuestionFormProps {
  questions: FieldQuestion[]
  setQuestions: (param: FieldQuestion[]) => void
  setCurrentView: (param: CurrentView) => void
  setRecommendation: (param: Recommendation) => void
}
