import type { QuestionFieldProps } from './QuestionField.types'
import './QuestionField-styles.css'
import TextField from '@mui/material/TextField'

export function QuestionField({ value }: QuestionFieldProps) {
  return (
    <div className={'QuestionField-container'}>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </div>
  )
}
