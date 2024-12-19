import DOMPurify from 'dompurify'

/**
 * This function sanitizes the HTML content and returns the sanitized HTML as a string.
 *
 * @param htmlString - The raw HTML string to sanitize.
 * @returns The sanitized HTML content.
 */
export function sanitizeHTML(htmlString: string): string {
  // Create a new HTML document from the raw HTML string
  const parser = new DOMParser()
  const doc = parser.parseFromString(htmlString, 'text/html')

  // Extract the body content
  const bodyContent = doc.body.innerHTML

  // Sanitize the extracted HTML content
  const sanitizedContent = DOMPurify.sanitize(bodyContent)

  // Return the sanitized content as a string
  return sanitizedContent
}
