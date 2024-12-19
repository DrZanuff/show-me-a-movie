import { FieldQuestion } from '@/App/App.types'
import { SupportedLanguages, translationKeys } from '@/languages/languages'
import shuffle from 'lodash/shuffle'

export function generateInitialQuestions(
  lang: SupportedLanguages
): FieldQuestion[] {
  const firstQuestion: FieldQuestion = {
    text: translationKeys[lang]['default-question'],
    placeholder: translationKeys[lang]['default-question-placeholder'],
  }

  const ratingQuestion: FieldQuestion = {
    text: translationKeys[lang]['default-rating-question'],
    placeholder: translationKeys[lang]['default-rating-question-placeholder'],
  }

  const avoidListQuestion: FieldQuestion = {
    text: translationKeys[lang]['deafult-avoid-list'],
    placeholder: translationKeys[lang]['deafult-avoid-list-placeholder'],
  }

  const generalQuestion: FieldQuestion = {
    text: translationKeys[lang]['default-general-question'],
    placeholder: translationKeys[lang]['default-general-question-placeholder'],
  }

  const randomInitalQuestion: FieldQuestion[] = []

  for (let i = 0; i < 4; i++) {
    randomInitalQuestion.push({
      text: translationKeys[lang][`default-question-${i + 1}`],
      placeholder:
        translationKeys[lang][`default-question-placeholder-${i + 1}`],
    })
  }

  return [
    firstQuestion,
    ratingQuestion,
    avoidListQuestion,
    ...shuffle(randomInitalQuestion).slice(0, 3),
    generalQuestion,
  ]
}
