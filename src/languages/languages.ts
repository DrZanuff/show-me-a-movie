export type SupportedLanguages = 'en-US' | 'pt-BR'

type Translations = {
  [key in SupportedLanguages]: {
    [key: string]: string
  }
}

export const translationKeys: Translations = {
  'en-US': {
    'default-question': 'What kind of movie do yo want to watch?',
    'default-question-placeholder': 'e.g: Fantasy, Sci-Fi',
    'default-question-1': 'Do you like old movies?',
    'default-question-placeholder-1': '',
    'default-question-2': 'Movies rating for +18?',
    'default-question-placeholder-2': '',
    'default-question-3': 'Do you like animations?',
    'default-question-placeholder-3': '',
    'default-question-4': 'Do you like musicals?',
    'default-question-placeholder-4': '',
  },
  'pt-BR': {
    'default-question': 'Que tipo de filme quer assitir?',
    'default-question-placeholder': 'ex: Fantasia, Sci-Fi',
    'default-question-1': 'Gosta de filme antigos?',
    'default-question-placeholder-1': '',
    'default-question-2': 'Filmes com indicação para maiores de +18?',
    'default-question-placeholder-2': '',
    'default-question-3': 'Você gosta de animações?',
    'default-question-placeholder-3': '',
    'default-question-4': 'Você gosta de musicais?',
    'default-question-placeholder-4': '',
  },
}
