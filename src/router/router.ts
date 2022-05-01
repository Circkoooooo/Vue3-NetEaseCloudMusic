import { createRouter, createWebHashHistory } from "vue-router"
import FindMusic from '../page/FindMusic/src/FindMusic.vue'
import Video from '../page/Video/src/Video.vue'
import FindMusicRecommend from '@/components/FindMusicRecommend/src/FindMusicRecommend.vue'
import FindMusicMusicList from '@/components/FindMusicMusicList/src/FindMusicMusicList.vue'
import MusicListShow from '@/page/MusicListShow/src/MusicListShow.vue'
import MusicListShowMusicList from '@/components/MusicListShowMusicList/src/MusicListShowMusicList.vue'
import MusicListShowComment from '@/components/MusicListShowComment/src/MusicListShowComment.vue'
const routes = [
    { path: "/", redirect: "/findmusic/recommend" },
    {
        path: "/musiclistshow",
        name: "musiclistshow",
        component: MusicListShow,
        redirect: "/musiclistshow/musiclist",
        children: [
            {
                path: "musiclist",
                component: MusicListShowMusicList
            },
            {
                path: "comment",
                component: MusicListShowComment
            }
        ]
    },
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
                path: "findmusiclist",
                component: FindMusicMusicList,
            },

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