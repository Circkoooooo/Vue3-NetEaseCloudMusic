import axios from "axios"
export const getHomeAd = () => {
    return axios.get("/login/status")
}
