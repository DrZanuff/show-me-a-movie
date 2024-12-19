import { useEffect, useRef } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { useTranslation } from 'react-i18next'
import type { RecommendationDetailsProps } from './RecommendationDetails.types'
import './RecommendationDetails-styles.css'

export function RecommendationDetails({
  title,
  isOpen,
  content,
  handleClose,
}: RecommendationDetailsProps) {
  const { t } = useTranslation()
  const descriptionElementRef = useRef<HTMLElement>(null)
  useEffect(() => {
    if (isOpen) {
      const { current: descriptionElement } = descriptionElementRef
      if (descriptionElement !== null) {
        descriptionElement.focus()
      }
    }
  }, [isOpen])

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        scroll="paper"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description">
        <DialogTitle id="scroll-dialog-title">{title}</DialogTitle>
        <DialogContent dividers>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}>
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{t('button-close')}</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
