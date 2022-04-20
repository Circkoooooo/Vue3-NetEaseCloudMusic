import { ref } from "vue"
import { handleRouter } from './handleRouter'
import { asideMenu } from '@/config/Home_AsideMenu'

export const useAside = () => {
    const { changeRouter } = handleRouter()
    const currentAside = ref(asideMenu[0].menuList[0].link)

    const changeAside = (link: string) => {
        currentAside.value = link
        changeRouter(link)
    }

    return {
        currentAside,
        changeAside
    }
}

