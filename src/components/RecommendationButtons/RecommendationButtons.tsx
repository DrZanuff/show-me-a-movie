import { useCallback, useMemo } from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import ThumbDownIcon from '@mui/icons-material/ThumbDown'
import VisibilityIcon from '@mui/icons-material/Visibility'
import Button from '@mui/material/Button'
import LoadingButton from '@mui/lab/LoadingButton'
import { useAtom } from 'jotai'
import { likedItemsAtom, dislikedItemsAtom } from '@/atoms/recommendationAtoms'

import type { RecommendationButtonsProps } from './RecommendationButtons.types'
import './RecommendationButtons-styles.css'

export function RecommendationButtons({ title }: RecommendationButtonsProps) {
  const [likedItems, updateLikedItems] = useAtom(likedItemsAtom)
  const [dislikedItems, updateDislikedItems] = useAtom(dislikedItemsAtom)

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

  return (
    <div className={'RecommendationButtons-container'}>
      <span>{title}</span>
      <div className="RecommendationButtons-container-buttons">
        <Button
          variant={isDisliked ? 'outlined' : 'contained'}
          color="error"
          onClick={handleDislike}>
          <ThumbDownIcon />
        </Button>
        <Button
          variant={isLiked ? 'outlined' : 'contained'}
          onClick={handleLike}>
          <ThumbUpIcon />
        </Button>
        <LoadingButton variant="contained" color="secondary" loading={false}>
          <VisibilityIcon />
        </LoadingButton>
      </div>
    </div>
  )
}
