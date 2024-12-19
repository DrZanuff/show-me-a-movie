export function extractRecommendationObject(input: string) {
  const match = input.match(/<recommendation>([\s\S]*?)<\/recommendation>/)

  if (match) {
    const jsonString = match[1].trim() // Extract the content and trim any whitespace
    try {
      return JSON.parse(jsonString)
    } catch (error) {
      console.error('Failed to parse JSON:', error, { input })
      return null
    }
  } else {
    console.error('No recommendation tag found.', { input })
    return null
  }
}
