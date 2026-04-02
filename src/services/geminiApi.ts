import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY)
export const model = genAI.getGenerativeModel({
  model: 'gemini-2.5-flash-lite',
})

const RETRY_DELAY_MS = 40000
const MAX_ATTEMPTS = 2

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export async function generateContentWithRetry(prompt: string) {
  let lastError: unknown

  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    try {
      const result = await model.generateContent(prompt)

      if (!result?.response) {
        throw new Error('Empty Gemini response')
      }

      return result
    } catch (error) {
      lastError = error

      if (attempt < MAX_ATTEMPTS) {
        await wait(RETRY_DELAY_MS)
      }
    }
  }

  throw lastError instanceof Error
    ? lastError
    : new Error('Gemini request failed')
}
