import { SupportedLanguages, translationKeys } from '@/languages/languages'

export function generateDetailsPrompt(lang: SupportedLanguages, title: string) {
  const promptHeader = translationKeys[lang]['prompt-more-details']

  return `
  ${promptHeader}
  ${title}
  `
}
