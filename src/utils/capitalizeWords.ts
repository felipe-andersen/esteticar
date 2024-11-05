

export function capitalizeWords(text: string): string {
    let words 
    if(text === undefined){
        words = ""
    }else {
        words = text.toLowerCase()
        words = text.replace(/\b\w/g, (c) => c.toUpperCase());
    }
    return words
}