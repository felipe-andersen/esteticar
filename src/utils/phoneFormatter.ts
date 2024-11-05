

export function onlyNaturalNumbers(number: string) {
    let result = number!.replace(/\D/g, '')
    return result
}

export function phoneFormatter(number: string) {
    let result = number?.replace(/\D/g, '')
    return result
}