/**
 * 将万以上的数字转换为约数,并加单位
 */
export const numberToAbout = (number: number) => {
    if (number / 100000000 > 1) {
        return Math.floor(number / 100000000) + "亿";
    }
    if (number / 10000 > 1) {
        return Math.floor(number / 10000) + "万"
    }

}