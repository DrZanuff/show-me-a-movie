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
export const promptMovieDetailsEnUS = `
Could you provide more details about this movie, title, or TV series?
For example, plot summary, main characters, or notable features.

I want the result in a HTML structure without any css.
Title:
`
