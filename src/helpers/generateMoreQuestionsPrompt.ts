import { FieldQuestion } from '@/components/QuestionForm/QuestionForm.types'
import { SupportedLanguages, translationKeys } from '@/languages/languages'

type GenerateMoreQuestionsPromptParms = {
  questions: FieldQuestion[]
}

export function generateMoreQuestionsPrompt(
  lang: SupportedLanguages,
  { questions }: GenerateMoreQuestionsPromptParms
) {
  const promptHeader = translationKeys[lang]['prompt-more-questions-header']
  const promptContext = translationKeys[lang]['prompt-more-questions-context']

  const promptBody = questions
    .map((question, idx) => `${idx}-${question.text}\n${question.text}\n`)
    .join('\n')

  return `
  ${promptHeader}

  ${promptBody}

  ${promptContext}
  `
}
