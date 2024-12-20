import { AnsweredFieldQuestion } from '@/components/QuestionForm/QuestionForm.types'

export function generateQuestionsAsText(
  questions: AnsweredFieldQuestion[]
): string {
  return questions
    .map((question, idx) => `${idx + 1} - ${question.text}\n${question.answer}`)
    .join('\n\n')
}
