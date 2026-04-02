import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Button from '@mui/material/Button'

type ApiErrorModalProps = {
  open: boolean
  onClose: () => void
}

export function ApiErrorModal({ open, onClose }: ApiErrorModalProps) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Request failed</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Fetch failed, please try again later.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} autoFocus>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  )
}
