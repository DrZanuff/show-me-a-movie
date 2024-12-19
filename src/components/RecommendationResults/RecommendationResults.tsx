import type { RecommendationResultsProps } from './RecommendationResults.types'
import './RecommendationResults-styles.css'

export function RecommendationResults({
  recommendation,
}: RecommendationResultsProps) {
  return (
    <div className={'RecommendationResults-container'}>
      <h1>{recommendation.title}</h1>
      <ul>
        {recommendation.options.map((rec, idx) => (
          <li key={rec + '-' + idx}>{rec}</li>
        ))}
      </ul>
    </div>
  )
}
