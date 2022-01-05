export const bullet = (value) => {
    return `•・･  ${value}`
}

export const dollar = (value) => {
    return `$${value}`
}

export const averageVal = (value) => {
    return value.reduce((a, b) => {
       return (a + b) / value.length;
    })

}