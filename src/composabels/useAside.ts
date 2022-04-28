import { ref, watch } from "vue"
import { useRoute } from "vue-router"
import { handleRouter } from './handleRouter'
import { asideMenu } from '@/config/Home_AsideMenu'
import { useFindMusicStore } from "@/store/findMusic"

export const useAside = () => {
    const route = useRoute()
    const { changeRouter } = handleRouter()
    const currentAside = ref(asideMenu[0].menuList[0].link)
    const findmusicStore = useFindMusicStore()

    watch(route, (n, o) => {
        currentAside.value = n.path.substring(1)
    })

    const changeAside = (link: string) => {
        changeRouter(link)
        findmusicStore.currentIndex = 0
    }

    return {
        currentAside,
        changeAside
    }
}

