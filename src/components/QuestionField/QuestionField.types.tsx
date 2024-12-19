import type { TextFieldProps } from '@mui/material/TextField'

export interface QuestionFieldProps
  extends Omit<TextFieldProps, 'value' | 'onChange'> {
  id: string
  name: string
  text: string
  placeholder?: string
  required: boolean
}
