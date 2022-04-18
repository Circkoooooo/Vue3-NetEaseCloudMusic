import { createRouter, createWebHashHistory } from "vue-router";

import FindMusic from '../page/FindMusic/src/FindMusic.vue';
import Video from '../page/Video/src/Video.vue'
const routes = [
    { path: "/", redirect: "/findmusic" },
    {
        path: "/findmusic",
        name: "findmusic",
        component: FindMusic
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