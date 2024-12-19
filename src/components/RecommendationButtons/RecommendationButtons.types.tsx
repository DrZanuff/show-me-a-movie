export interface RecommendationButtonsProps {
  title: string
  handleOpenDetails: () => void
  setCurrentTitleDetails: (param: string) => void
  setCurrentTitle: (param: string) => void
  isLoading: boolean
  setIsLoading: (param: boolean) => void
}
