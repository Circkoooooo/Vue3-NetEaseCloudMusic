//数字转换成中文单位
export const numberToCh = (number: number | undefined) => {
    if (number !== undefined) {
        // 100, 000, 000
        if (number > 100000000) {
            return (number / 100000000).toFixed(0) + "亿"
        }
        if (number > 10000) {
            return (number / 10000).toFixed(0) + "万"
        }
    }
}
