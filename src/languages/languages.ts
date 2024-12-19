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
    'disliked-movies-prompt': "Movies I don't like:",
    'liked-movies-prompt': 'Movies I like:',
    'exclude-movies-prompt':
      "Movies you should not recommend because I've already saw it:",
    'additional-info': 'Any other relevant information?',
    'prompt-model': `
Based on my answers, respond with 3 recommendations including the names of the works. They can be movies or series. If there’s nothing similar, suggest works that contain some similar elements.
I don\'t need any extra descriptions, only the names of the works. I want only three options.
I want only the names of the works. The format of the response I expect from you is as follows:

Example 1: 
<recommendation>
{
  title: "Fantasy Movie for Families",
  options: [
    "Movie 1",
    "Movie 2",
    "Series 1"
  ]
}
</recommendation>

Example 2:
<recommendation>
{
  title: "Action Movie +18",
  options: [
    "Movie 1",
    "Movie 2",
    "Movie 3",
  ]
}
</recommendation>
    `,
    'prompt-header': `
Observe the following questions, where I answer and you'll try to discover my mood and what kind of movie or tv series I would probably like to watch.
Based on my answers , suggest a movie a TV serie for me:`,
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
    'disliked-movies-prompt': 'Filmes que eu não gosto:',
    'liked-movies-prompt': 'Filmes que eu gosto:',
    'exclude-movies-prompt':
      'Filmes que você não deve recomendar porque eu já vi:',
    'additional-info': 'Alguma outra informação relevante?',
    'prompt-model': `
"Me indique uma obra que seja de drama que aborde depressão e dificuldades na vida. Me responda com 3 indicações com o nome das obras. Pode ser filmes ou séries. Se não tiver algo parecido faça algumas sugestão de obras que possuem algum elemento parecido.
Não preciso de descrição extra, somente o nome da obra. Eu quero somente três opções.
Eu quero somente o nome das obras. O formato da resposta que eu espero de você é do seguinte modelo:

Exemplo 1:
<recommendation>
{
  title: "Filme de Fantasia para familia",
  options: [
    "Filme 1",
    "Filme 2",
    "Série 1"
  ]
}
</recommendation>

Exemplo 2:
<recommendation>
{
  title: "Filme de ação +18",
  options: [
    "Filme 1",
    "Filme 2",
    "Filme 3",
  ]
}
</recommendation>
    `,
    'prompt-header': `
    Observe the following questions, where I answer and you'll try to discover my mood and what kind of movie or tv series I would probably like to watch.
    Based on my answers , suggest a movie a TV serie for me:`,
  },
}
