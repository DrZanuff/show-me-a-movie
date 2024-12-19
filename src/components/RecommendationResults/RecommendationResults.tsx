import { useState, useCallback } from 'react'
import { RecommendationButtons } from '@/components/RecommendationButtons'
import { useTranslation } from 'react-i18next'
import { LoadingButton } from '@mui/lab'
import { generateRequestMoviePrompt } from '@/helpers/generateRequestMoviePrompt'
import { SupportedLanguages } from '@/languages/languages'
import type { RecommendationResultsProps } from './RecommendationResults.types'
import { useAtomValue } from 'jotai'
import { likedItemsAtom, dislikedItemsAtom } from '@/atoms/recommendationAtoms'

import './RecommendationResults-styles.css'
import { generateQuestionsAsText } from '@/helpers/generateQuestionsAsText'
import { model } from '@/services/geminiApi'
import toast from 'react-hot-toast'
import { extractResultObject } from '@/helpers/extractResultObject'

export function RecommendationResults({
  recommendation,
  questionList,
  setRecommendation,
}: RecommendationResultsProps) {
  const { t, i18n } = useTranslation()
  const lang = i18n.language as SupportedLanguages
  const [isLoading, setIsLoading] = useState(false)
  const likedItems = useAtomValue(likedItemsAtom)
  const dislikedItems = useAtomValue(dislikedItemsAtom)

  const handleLoadMore = useCallback(async () => {
    setIsLoading(true)

    const questionsAsText = generateQuestionsAsText(questionList)
    const prompt = generateRequestMoviePrompt(lang, {
      questionText: questionsAsText,
      dislikedMovies: dislikedItems,
      exclusionList: dislikedItems,
      likedMovies: likedItems,
    })

    const result = await model.generateContent(prompt)

    if (!result?.response) {
      toast.error(`${t('something-wrong')} - Code: 3xA`)
      console.error('ERROR:', { result })
      setIsLoading(false)
      return
    }

    const resultText = result.response.text()

    const suggestion = extractResultObject(resultText)

    if (!suggestion) {
      toast.error(`${t('something-wrong')} - Code: 3xB`)
      console.error('ERROR:', { suggestion, resultText })
      setIsLoading(false)
      return
    }

    setRecommendation(suggestion)
    setIsLoading(false)
  }, [dislikedItems, lang, likedItems, questionList, setRecommendation, t])

  return (
    <div className={'RecommendationResults-container'}>
      <h1>{recommendation.title}</h1>
      <ul
        className={`RecommendationResults-list ${isLoading ? 'disabled' : ''}`}>
        {recommendation.options.map((rec, idx) => (
          <li key={rec + '-' + idx}>
            <RecommendationButtons title={rec} />
          </li>
        ))}
      </ul>

      <LoadingButton
        variant="contained"
        onClick={handleLoadMore}
        loading={isLoading}>
        {t('load-more-suggestions')}
      </LoadingButton>
    </div>
  )
}
