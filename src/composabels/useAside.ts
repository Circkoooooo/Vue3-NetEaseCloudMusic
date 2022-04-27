import { ref, watch } from "vue"
import { useRoute } from "vue-router"
import { handleRouter } from './handleRouter'
import { asideMenu } from '@/config/Home_AsideMenu'

export const useAside = () => {
    const route = useRoute()
    const { changeRouter } = handleRouter()
    const currentAside = ref(asideMenu[0].menuList[0].link)

    watch(route, (n, o) => {
        currentAside.value = n.path.substring(1)
    })

    const changeAside = (link: string) => {
        changeRouter(link)
    }

    return {
        currentAside,
        changeAside
    }
}

