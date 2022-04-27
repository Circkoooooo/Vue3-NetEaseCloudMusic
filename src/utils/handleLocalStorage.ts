/**
 * 设置本地存储
 * @param key 
 * @param value 
 * @returns 
 */
export const setLocalStorage = (data: { key: string, value: string | any } | Array<{ key: string, value: string | any }>) => {
    if (data instanceof Array) {
        data.forEach(item => {
            if (item.key !== "" || item.value !== "") {
                if (typeof item.value !== "string") {
                    window.localStorage.setItem(item.key, JSON.stringify(item.value))
                } else {
                    window.localStorage.setItem(item.key, item.value)
                }
            }
        })
    } else {
        if (data.key !== "" || data.value !== "") {
            if (typeof data.value !== "string") {
                window.localStorage.setItem(data.key, JSON.stringify(data.value))
            } else {
                window.localStorage.setItem(data.key, data.value)
            }
        }
    }
}

export const getLocalStorage = (key: string) => {
    if (window.localStorage.getItem(key)) {
        return window.localStorage.getItem(key)
    } else {
        return ""
    }
}