import axios from "axios"
/**
 * 获取歌单详情
 * @param id 
 * @returns 
 */
export const getMusicListDetail = (id: number, s: number = 0) => {
    return axios.get("/playlist/detail", {
        params: {
            id: id,
            s: s
        }
    })
}
