import { FieldQuestion } from '@/components/App/App.types'
import { SupportedLanguages, translationKeys } from '@/languages/languages'
import shuffle from 'lodash/shuffle'

export function generateInitialQuestions(
  lang: SupportedLanguages
): FieldQuestion[] {
  const firstQuestion: FieldQuestion = {
    text: translationKeys[lang]['default-question'],
    placeholder: translationKeys[lang]['default-question-placeholder'],
  }

  const randomInitalQuestion: FieldQuestion[] = []

  for (let i = 0; i < 4; i++) {
    randomInitalQuestion.push({
      text: translationKeys[lang][`default-question-${i + 1}`],
      placeholder:
        translationKeys[lang][`default-question-placeholder-${i + 1}`],
    })
  }

  return [firstQuestion, ...shuffle(randomInitalQuestion).slice(0, 3)]
}
