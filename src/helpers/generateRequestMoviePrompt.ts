/* eslint-disable no-extra-boolean-cast */
import { AnsweredFieldQuestion } from '@/components/QuestionForm/QuestionForm.types'
import { SupportedLanguages, translationKeys } from '@/languages/languages'

type MoviePromptProps = {
  questionText: string
  optionalDetails?: AnsweredFieldQuestion
  likedMovies?: string[]
  dislikedMovies?: string[]
  exclusionList?: string[]
}

export function generateRequestMoviePrompt(
  lang: SupportedLanguages,
  {
    questionText,
    dislikedMovies,
    exclusionList,
    likedMovies,
    optionalDetails,
  }: MoviePromptProps
) {
  let prompt = translationKeys[lang]['prompt-header'] + '\n\n' + questionText

  if (!!dislikedMovies?.length) {
    prompt += translationKeys[lang]['disliked-movies-prompt'] + '\n'
    prompt += dislikedMovies.map((movie) => `- ${movie}\n`).join('\n')
  }

  if (!!likedMovies?.length) {
    prompt += translationKeys[lang]['liked-movies-prompt'] + '\n'
    prompt += likedMovies.map((movie) => `- ${movie}\n`).join('\n')
  }

  if (!!exclusionList?.length) {
    prompt += translationKeys[lang]['exclude-movies-prompt'] + '\n'
    prompt += exclusionList.map((movie) => `- ${movie}\n`).join('\n')
  }

  if (optionalDetails?.answer) {
    prompt += optionalDetails.text + '\n'
    prompt += optionalDetails.answer + '\n'
  }

  prompt += `\n${translationKeys[lang]['prompt-model']}`

  return prompt
}
