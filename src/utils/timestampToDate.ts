export const timestampToDate = (timestamp: number) => {
    const date = new Date(timestamp)
    const y = date.getFullYear()
    const m = date.getMonth()
    const d = date.getDay()
    return y + "-" + m + "-" + d
}