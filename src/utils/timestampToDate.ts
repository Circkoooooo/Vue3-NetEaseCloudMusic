export const timestampToDate = (timestamp: number) => {
    const date = new Date(timestamp)
    const dateArr = date.toLocaleDateString().split("/")
    if (parseInt(dateArr[1]) < 10) {
        dateArr[1] = "0" + dateArr[1]
    }
    return dateArr.join("-")
}