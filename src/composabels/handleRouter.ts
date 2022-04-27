import { useRouter } from "vue-router"

export const handleRouter = () => {
    const router = useRouter()

    /**
     * 改变根路径
     * @param link 
     * @returns 
     */
    const changeRouter = (link: string) => {
        router.push({
            path: "/" + link,
        })
    }

    /**
     * 改变子路径
     * @param link 
     */
    const changeChildRouter = (link: string) => {
        router.push({
            path: link
        })
    }
    return {
        changeRouter,
        changeChildRouter
    }
}