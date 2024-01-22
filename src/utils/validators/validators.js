export const required = (value) => {
    if(value) {
        return undefined
    }
    return 'Поле обязательное'
}
export const maxLengthCreator = (maxValue) => (value ) => {
    if(value && value.length > maxValue) {
        return `Максимальная длина сообщения ${maxValue} символов`
    }
    return undefined
}
export const minLengthCreator = (minValue) => (value) => {
    if(value && value.length < minValue) {
        return `Минимальная длина сообщения ${minValue} символа`
    }
    return undefined
}