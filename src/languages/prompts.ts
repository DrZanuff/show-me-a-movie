export const promptModelEnUS = `
Based on my answers, respond with 3 recommendations including the names of the works. They can be movies or series. If there’s nothing similar, suggest works that contain some similar elements.
I donzw't need any extra descriptions, only the names of the works. I want only three options.
I want only the names of the works. The format of the response I expect from you is as follows:

Example 1: 
<object>
{
  "title": "Fantasy Movie for Families",
  "options": [
    "Movie 1",
    "Movie 2",
    "Series 1"
  ]
}
</object>

Example 2:
<object>
{
  "title": "Action Movie +18",
  "options": [
    "Movie 1",
    "Movie 2",
    "Movie 3",
  ]
}
</object>

Please, always wraps the results with <object></object>
`
export const promptHeaderEnUS = `
Observe the following questions, where I answer and you'll try to discover my mood and what kind of movie or tv series I would probably like to watch.
Based on my answers , suggest a movie a TV serie for me:`

export const promptMoreQuestionsHeaderEnUS = `
Observe the following questions, where I answer and you'll try to discover my mood and what kind of movie or tv series I would probably like to watch.
Based on my answers , suggest a movie a TV serie for me. I already have the following questions:`

export const promptMoreQuestionsContextEnUS = `
Don't repeat my questions, but create new ones. Generate for me in the following pattern (I want 3 questions):

Example 1 (generate 3 questions):
<object>
[
  {
    "text": "What is your current mood?",
    "placeholder":"e.g happy, tired, downbeat"
  },
  {
    "text": "Are you a parent?",
    "placeholder":""
  },
  {
    "text": "Lorem ipsum dolor met?",
    "placeholder":""
  }
]
</object>

Example 2 (generate 3 questions):
<object>
[
  {
    "text": "What is your favorite place?",
    "placeholder":"e.g London, the beach etc."
  },
  {
    "text": "From what country are you?",
    "placeholder":"e.g Brazil, USA etc."
  },
  {
    "text": "Lorem ipsum dolor met?",
    "placeholder":""
  }
]
</object>

Please, always wraps the results with <object></object>
`

export const promptModelPtBR = `
Me indique uma obra que seja de drama que aborde depressão e dificuldades na vida.
Me responda com 3 indicações com o nome das obras. Pode ser filmes ou séries.
Se não tiver algo parecido faça algumas sugestão de obras que possuem algum elemento parecido.
Não preciso de descrição extra, somente o nome da obra. Eu quero somente três opções.
Eu quero somente o nome das obras. O formato da resposta que eu espero de você é do seguinte modelo:

Example 1:
<object>
{
  "title": "Filme de Fantasia para familia",
  "options": [
    "Filme 1",
    "Filme 2",
    "Série 1"
  ]
}
</object>

Example 2:
<object>
{
  "title": "Filme de ação +18",
  "options": [
    "Filme 1",
    "Filme 2",
    "Filme 3",
  ]
}
</object>

Por favor, sempre envolva os resultados com <object></object>
`

export const promptHeaderPtBR = `
Observe as seguintes perguntas, onde eu respondo e você tentará descobrir o meu humor e que tipo de filme ou série de TV eu provavelmente gostaria de assistir.
Com base nas minhas respostas, sugira um filme e uma série de TV para mim:`

export const promptMoreQuestionsHeaderPtBR = `
Observe as seguintes perguntas, onde eu respondo e você tentará descobrir o meu humor e que tipo de filme ou série de TV eu provavelmente gostaria de assistir.
Com base nas minhas respostas, sugira um filme e uma série de TV para mim. Eu já tenho as seguintes perguntas:`

export const promptMoreQuestionsContextPtBR = `
Não repita minhas perguntas, mas crie novas. Gere para mim no seguinte padrão (quero 10 perguntas):

Exemplo 1 (gere 3 perguntas):
<object>
[
  {
    "text": "Qual é o seu humor atual?",
    "placeholder":"ex: feliz, cansado, desanimado"
  },
  {
    "text": "Você é pai/mãe?",
    "placeholder":""
  },
  {
    "text": "Lorem ipsum dolor met?",
    "placeholder":""
  }
]
</object>

Exemplo 2 (gere 3 perguntas):
<object>
[
  {
    "text": "Qual é o seu lugar favorito?",
    "placeholder":"ex: Londres, a praia, etc."
  },
  {
    "text": "De qual país você é?",
    "placeholder":"ex: Brasil, EUA, etc."
  },
  {
    "text": "Lorem ipsum dolor met?",
    "placeholder":""
  }
]
</object>

Por favor, sempre envolva os resultados com <object></object>
`
