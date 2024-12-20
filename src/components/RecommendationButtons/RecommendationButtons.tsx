import { useCallback, useMemo } from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import ThumbDownIcon from '@mui/icons-material/ThumbDown'
import VisibilityIcon from '@mui/icons-material/Visibility'
import Button from '@mui/material/Button'
import LoadingButton from '@mui/lab/LoadingButton'
import { useAtom } from 'jotai'
import { likedItemsAtom, dislikedItemsAtom } from '@/atoms/recommendationAtoms'
import { useTranslation } from 'react-i18next'
import { generateDetailsPrompt } from '@/helpers/generateDetailsPrompt'
import { model } from '@/services/geminiApi'
import toast from 'react-hot-toast'
import CardContent from '@mui/material/CardContent'
import Card from '@mui/material/Card'
import { sanitizeHTML } from '@/helpers/sanitizeHTML'
import './RecommendationButtons-styles.css'
import type { RecommendationButtonsProps } from './RecommendationButtons.types'
import type { SupportedLanguages } from '@/languages/languages'
import { extractHTMLContent } from '@/helpers/extractHTMLContent'

export function RecommendationButtons({
  title,
  handleOpenDetails,
  isLoading,
  setCurrentTitleDetails,
  setCurrentTitle,
  setIsLoading,
}: RecommendationButtonsProps) {
  const [likedItems, updateLikedItems] = useAtom(likedItemsAtom)
  const [dislikedItems, updateDislikedItems] = useAtom(dislikedItemsAtom)
  const { t, i18n } = useTranslation()
  const lang = i18n.language as SupportedLanguages

  const isLiked = useMemo(() => {
    return likedItems.includes(title)
  }, [likedItems, title])

  const isDisliked = useMemo(() => {
    return dislikedItems.includes(title)
  }, [dislikedItems, title])

  const handleLike = useCallback(() => {
    updateLikedItems(title)
  }, [title, updateLikedItems])

  const handleDislike = useCallback(() => {
    updateDislikedItems(title)
  }, [title, updateDislikedItems])

  const handleShowDetails = useCallback(async () => {
    setIsLoading(true)
    setCurrentTitle(title)

    const prompt = generateDetailsPrompt(lang, title)

    const result = await model.generateContent(prompt)

    if (!result?.response) {
      toast.error(`${t('something-wrong')} - Code: 4xA`)
      console.error('ERROR:', { result })
      setIsLoading(false)
      return
    }

    const resultText = result.response.text()
    // const suggestion = extractResultObject(resultText)

    // if (!suggestion) {
    //   toast.error(`${t('something-wrong')} - Code: 3xB`)
    //   console.error('ERROR:', { suggestion, resultText })
    //   setIsLoading(false)
    //   return
    // }
    const html = extractHTMLContent(sanitizeHTML(resultText))

    setCurrentTitleDetails(html)

    handleOpenDetails()
    setIsLoading(false)
  }, [
    handleOpenDetails,
    lang,
    setCurrentTitle,
    setCurrentTitleDetails,
    setIsLoading,
    t,
    title,
  ])

  return (
    <Card elevation={7}>
      <CardContent>
        <div className={'RecommendationButtons-container'}>
          <h2>{title}</h2>
          <div className="RecommendationButtons-container-buttons">
            <Button
              variant={isDisliked ? 'outlined' : 'contained'}
              color="error"
              disabled={isLoading}
              onClick={handleDislike}>
              <ThumbDownIcon />
            </Button>
            <Button
              variant={isLiked ? 'outlined' : 'contained'}
              disabled={isLoading}
              onClick={handleLike}>
              <ThumbUpIcon />
            </Button>
            <LoadingButton
              variant="contained"
              color="secondary"
              loading={false}
              disabled={isLoading}
              onClick={handleShowDetails}>
              <VisibilityIcon />
            </LoadingButton>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
