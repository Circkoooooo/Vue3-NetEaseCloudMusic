import axios from "axios"
export const getUserDetail = (uid: number) => {
    return axios.get('/user/detail', {
        params: {
            uid: uid
        }
    })
}
