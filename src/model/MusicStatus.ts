import { Track } from "./Track"

export type MusicStatus = {
    currentMusicUrl: string,
    isPlay: boolean,
    nowTime: string,
    musicLong: string,
    musicLongNumber: {
        nowTime: number,
        musicLong: number
    },
}