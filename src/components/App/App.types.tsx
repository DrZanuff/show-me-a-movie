export interface AppProps {
  value?: string
}

export type FieldQuestion = {
  text: string
  placeholder: string
}

export type AnsweredFieldQuestion = {
  text: string
  answer?: string
}
