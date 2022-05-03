/**
 * 
 * @param a 
 * @param b 
 * @param method 1为升序，2为降序
 * @returns 
 */
export const sortByString = (a: string, b: string, method: number) => {
    let reg = /[a-zA-Z0-9]/
    if (reg.test(a) || reg.test(b)) {
        if (method === 1) {
            if (a > b) {
                return 1
            }
            else if (a < b) {
                return -1
            }
            return 0
        } else if (method === 2) {
            if (a > b) {
                return -1
            }
            else if (a < b) {
                return 1
            }
            return 0
        }
    } else {
        if (method === 1) {
            return a.localeCompare(b)
        } else if (method === 2) {
            return b.localeCompare(a)
        }
    }
    return 0
}
