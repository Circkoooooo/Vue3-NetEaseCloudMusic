import axios from "axios"
export const getSongUrl = (musicid: number) => {
    return axios.get('/song/url', {
        params: {
            id: musicid
        }
    })
}
