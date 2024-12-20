import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import TextField from '@mui/material/TextField'
import type { QuestionFieldProps } from './QuestionField.types'
import './QuestionField-styles.css'

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
      <Card elevation={7}>
        <CardContent>
          <div className="Field-container">
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
        </CardContent>
      </Card>
    </div>
  )
}
