import { createRouter, createWebHashHistory } from "vue-router"
import FindMusic from '../page/FindMusic/src/FindMusic.vue'
import Video from '../page/Video/src/Video.vue'
import FindMusicRecommend from '@/components/FindMusicRecommend/src/FindMusicRecommend.vue'
import FindMusicMusicList from '@/components/FindMusicMusicList/src/FindMusicMusicList.vue'

const routes = [
    { path: "/", redirect: "/findmusic/recommend" },
    {
        path: "/findmusic",
        name: "findmusic",
        component: FindMusic,
        redirect: "/findmusic/recommend",
        children: [
            {
                path: "recommend",
                component: FindMusicRecommend,
            },
            {
                path: "musiclist",
                component: FindMusicMusicList,
            }
        ]
    },
    {
        path: "/video",
        name: "video",

        component: Video
    },
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router