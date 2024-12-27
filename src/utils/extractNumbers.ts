export function extractNumbers(text: string | undefined) {
    if (text !== undefined) {
        const withoutNumber = text.replace(/[^0-9]/g, "")
        const newText = withoutNumber
        return newText
        
    } else {
        return undefined
    }
  }
  