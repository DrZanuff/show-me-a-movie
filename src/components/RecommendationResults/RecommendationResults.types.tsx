import { AnsweredFieldQuestion } from '@/components/QuestionForm/QuestionForm.types'

export type Recommendation = {
  title: string
  options: string[]
}

export interface RecommendationResultsProps {
  recommendation: Recommendation
  questionList: AnsweredFieldQuestion[]
  setRecommendation: (param: Recommendation) => void
}
