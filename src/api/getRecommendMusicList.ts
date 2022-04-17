import axios from "axios"
export const getLoginRecommendMusicList = () => {
    return axios.get("/recommend/resource")
}

/**
 * 未登录的歌单推荐
 * @param limit 数量
 * @returns 
 */
export const getLogoutRecommendMusicList = (limit: number) => {
    return axios.get(`/personalized?limit=${limit}`)
}
