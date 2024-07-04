
export function textWithoutSpecials(text: string) {
    let result = text!.replace(/[^a-zA-Z0-9 ]/g, '')
    return result
}