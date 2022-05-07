export const timestampToDate = (timestamp: number) => {
    const date = new Date(timestamp)
<<<<<<< HEAD
    const dateArr = date.toLocaleDateString().split("/")
    if (parseInt(dateArr[1]) < 10) {
        dateArr[1] = "0" + dateArr[1]
    }
    return dateArr.join("-")
=======
    const y = date.getFullYear()
    const m = date.getMonth()
    const d = date.getDay()
    return y + "-" + m + "-" + d
>>>>>>> parent of adaecb3 (fix:a localeString time bug)
}