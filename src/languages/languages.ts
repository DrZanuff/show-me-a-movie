import {
  promptHeaderEnUS,
  promptModelEnUS,
  promptMoreQuestionsHeaderEnUS,
  promptMoreQuestionsContextEnUS,
  promptMovieDetailsEnUS,
} from '@/languages/enUS/prompts'
import {
  promptHeaderPtBR,
  promptModelPtBR,
  promptMoreQuestionsHeaderPtBR,
  promptMoreQuestionsContextPtBR,
  promptMovieDetailsPtBR,
} from '@/languages/ptBR/prompts'

export type SupportedLanguages = 'en-US' | 'pt-BR'

type Translations = {
  [key in SupportedLanguages]: {
    [key: string]: string
  }
}

export const translationKeys: Translations = {
  'en-US': {
    // DEFAULT QUESTION
    'default-question': 'What kind of movie do yo want to watch?',
    'default-question-placeholder': 'e.g: Fantasy, Sci-Fi',
    'default-rating-question': 'What is the age rating?',
    'default-rating-question-placeholder': 'E.g.: PG, PG-13, R, G, TV MA etc.',
    'deafult-avoid-list': "Is there anything specific you'd like to avoid?",
    'deafult-avoid-list-placeholder':
      'e.g., Violence, gore, sad endings, overly cheesy romance',
    'default-general-question':
      'Any other information you would like to share?',
    'default-general-question-placeholder': '',
    // DEFAULT INITIAL RANDOM QUESTION
    'default-question-1': 'Do you like old movies?',
    'default-question-placeholder-1': '',
    'default-question-2':
      'Are you looking for something to watch alone or with others?',
    'default-question-placeholder-2': '',
    'default-question-3': 'Do you like animations?',
    'default-question-placeholder-3': '',
    'default-question-4': 'Do you like musicals?',
    'default-question-placeholder-4': '',
    // INCLUSION EXCLUSINON LIST
    'disliked-movies-prompt': "Movies I don't like:",
    'liked-movies-prompt': 'Movies I like:',
    'exclude-movies-prompt':
      "Movies you should not recommend because I don't like it:",
    // PROMPT
    'prompt-model': promptModelEnUS,
    'prompt-header': promptHeaderEnUS,
    'prompt-more-questions-header': promptMoreQuestionsHeaderEnUS,
    'prompt-more-questions-context': promptMoreQuestionsContextEnUS,
    'prompt-more-details': promptMovieDetailsEnUS,
    // UI
    'submit-button-text': 'Submit',
    'load-more-questions': 'Generate more questions',
    'load-more-suggestions': 'More suggestions',
    'button-close': 'Close',
    'new-search-button': 'New search',
    // ERRORS
    'something-wrong': 'Something went wrong... try again.',
  },
  'pt-BR': {
    // DEFAULT QUESTION
    'default-question': 'Que tipo de filme quer assitir?',
    'default-question-placeholder': 'ex: Fantasia, Sci-Fi',
    'default-rating-question': 'Qual a classificação indicativa?',
    'default-rating-question-placeholder': 'Ex: +18, +16, Livre etc.',
    'deafult-avoid-list': 'Há algo específico que você gostaria de evitar?',
    'deafult-avoid-list-placeholder':
      'Ex.: Violência, cenas sangrentas, finais tristes, romance muito clichê',
    'default-general-question':
      'Alguma outra informação que você gostaria de compartilhar?',
    'default-general-question-placeholder': '',
    // DEFAULT INITIAL RANDOM QUESTION
    'default-question-1': 'Gosta de filme antigos?',
    'default-question-placeholder-1': '',
    'default-question-2':
      'Você está procurando algo para assistir sozinho ou com outras pessoas?',
    'default-question-placeholder-2': '',
    'default-question-3': 'Você gosta de animações?',
    'default-question-placeholder-3': '',
    'default-question-4': 'Você gosta de musicais?',
    'default-question-placeholder-4': '',
    'disliked-movies-prompt': 'Filmes que eu não gosto:',
    // INCLUSION EXCLUSINON LIST
    'liked-movies-prompt': 'Filmes que eu gosto:',
    'exclude-movies-prompt':
      'Filmes que você não deve recomendar porque eu não gostei:',
    // PROMPT
    'prompt-model': promptModelPtBR,
    'prompt-header': promptHeaderPtBR,
    'prompt-more-questions-header': promptMoreQuestionsHeaderPtBR,
    'prompt-more-questions-context': promptMoreQuestionsContextPtBR,
    'prompt-more-details': promptMovieDetailsPtBR,
    // UI
    'submit-button-text': 'Enviar',
    'load-more-questions': 'Gerar mais perguntas',
    'load-more-suggestions': 'Mais sugestões',
    'button-close': 'Fechar',
    'new-search-button': 'Nova busca',
    // ERRORS
    'something-wrong': 'Algo de errado aconteceu... tente novamente.',
  },
}
