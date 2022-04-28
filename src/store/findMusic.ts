import { defineStore } from "pinia";

export const useFindMusicStore = defineStore({
    id: "findmusic",
    state: () => {
        return {
            currentIndex: 0
        }
    }
})