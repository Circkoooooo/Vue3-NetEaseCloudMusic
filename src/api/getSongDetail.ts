import axios from "axios"
export const getSongDetail = (ids: number | string) => {
    return axios.get("/song/detail", {
        params: {
            ids: ids
        }
    })
}
