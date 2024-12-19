export function extractHTMLContent(htmlString: string): string {
  const regex = /```html\n([\s\S]*?)\n```/

  const match = htmlString.match(regex)

  if (match && match[1]) {
    return match[1].trim()
  }

  return ''
}
