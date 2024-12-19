import type { QuestionFieldProps } from './QuestionField.types'
import './QuestionField-styles.css'
import TextField from '@mui/material/TextField'

export function QuestionField({
  id,
  name,
  required,
  placeholder,
  text,
  ...rest
}: QuestionFieldProps) {
  return (
    <div className={'QuestionField-container'}>
      <label htmlFor={id}>{text}</label>
      <TextField
        id={id}
        name={name}
        defaultValue=""
        placeholder={placeholder ?? ''}
        size="small"
        required={required}
        {...rest}
      />
    </div>
  )
}
