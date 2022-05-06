import { reactive, ref } from 'vue'
import { musicCurrentTimeToTime } from '@/utils/musicCurrentTimeToTime'
const initUsePlayMusic = () => {
    const musicStatus = reactive({
        currentMusicUrl: "",
        isPlay: false,
        nowTime: "00:00",
        musicLong: "00:00",
        musicLongNumber: {
            nowTime: 0,
            musicLong: 0
        }
    })
    const audio = ref(new Audio())
    audio.value.src = musicStatus.currentMusicUrl

    audio.value.ontimeupdate = () => {
        const duration = audio.value.duration
        const currentTime = audio.value.currentTime
        musicStatus.musicLong = musicCurrentTimeToTime(duration)
        musicStatus.nowTime = musicCurrentTimeToTime(currentTime)
        musicStatus.musicLongNumber.musicLong = Math.floor(duration)
        musicStatus.musicLongNumber.nowTime = Math.floor(currentTime)
    }

    /**
     * 切换歌曲
     */
    const changeMusic = (musicurl: string) => {
        musicStatus.currentMusicUrl = musicurl
        musicStatus.isPlay = true
        audio.value.src = musicurl
        audio.value.play()
    }

    /**
     * 改变歌曲播放和停止
     */
    const changePlay = () => {
        musicStatus.isPlay === false ? audio.value.play() : audio.value.pause()
        musicStatus.isPlay = !musicStatus.isPlay
    }
    return {
        musicStatus,
        changePlay,
        changeMusic,
    }
}
const init = initUsePlayMusic()
export const usePlayMusic = () => init
