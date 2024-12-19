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

export const promptMovieDetailsPtBR = `
Você poderia fornecer mais detalhes sobre este filme, título ou série de TV?
Por exemplo, resumo da trama, principais personagens ou características notáveis.

Eu quero o resultado em uma estrutura HTML sem nenhum css.
Título:
`
