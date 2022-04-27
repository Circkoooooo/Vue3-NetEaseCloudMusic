import { defineStore } from "pinia";

export const useMusicListStore = defineStore({
    id: "musiclist",
    state: () => {
        return {
            musicListId: 0
        }
    }
})