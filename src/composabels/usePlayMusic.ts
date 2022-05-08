import { computed, reactive, ref } from 'vue'
import { musicCurrentTimeToTime } from '@/utils/musicCurrentTimeToTime'
import type { MusicStatus } from '@/model/MusicStatus'
import { Track } from '@/model/Track'
const initUsePlayMusic = () => {
    const musicStatus = reactive<MusicStatus>({
        currentMusicUrl: "",
        isPlay: false,
        nowTime: "00:00",
        musicLong: "00:00",
        musicLongNumber: {
            nowTime: 0,
            musicLong: 0
        },
    })
    const playMusicInfo = ref<Track>({
        name: "无歌曲",
        al: {
            id: 0,
            name: "",
            picUrl: ""
        },
        ar: [{
            id: 0,
            name: "无歌手"
        }]
    } as Track)
    const audio = ref(new Audio())
    audio.value.src = musicStatus.currentMusicUrl

    audio.value.ontimeupdate = () => {
        const duration = audio.value.duration
        const currentTime = audio.value.currentTime
        musicStatus.musicLong = musicCurrentTimeToTime(duration)
        musicStatus.nowTime = musicCurrentTimeToTime(currentTime)
        musicStatus.musicLongNumber.musicLong =  Math.floor(duration)
        musicStatus.musicLongNumber.nowTime = Math.floor(currentTime)
    }

    const calcProgress = computed(() => {
        return (
            (musicStatus.musicLongNumber.nowTime / musicStatus.musicLongNumber.musicLong) * 100
        );
    })
    /**
     * 切换歌曲
     */
    const changeMusic = (musicurl: string, musicInfo: Track) => {
        musicStatus.currentMusicUrl = musicurl
        musicStatus.isPlay = true
        audio.value.src = musicurl
        playMusicInfo.value = musicInfo
        audio.value.play()
    }

    /**
     * 改变歌曲播放和停止
     */
    const changePlay = () => {
        musicStatus.isPlay === false ? audio.value.play() : audio.value.pause()
        musicStatus.isPlay = !musicStatus.isPlay
    }
    /**
     * 单击进度条 切换进度
     */
    const clickProgress = (event: MouseEvent) => {
        const progressBar = document.getElementById('music-progress-bar')
        if (progressBar !== undefined && progressBar !== null) {
            audio.value.currentTime = event.offsetX / progressBar.clientWidth * audio.value.duration
        }
    }

    return {
        musicStatus,
        changePlay,
        changeMusic,
        clickProgress,
        calcProgress,
        playMusicInfo
    }
}
const init = initUsePlayMusic()
export const usePlayMusic = () => init
