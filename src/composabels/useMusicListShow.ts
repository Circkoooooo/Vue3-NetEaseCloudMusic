import { handleRouter } from '@/composabels/handleRouter'
import { useMusicListStore } from '@/store/musiclist'
import { getMusicListDetail } from '@/api/getMusicListDetail'
import { PlayList } from '@/model/PlayList'
import { getUserDetail } from '@/api/getUserDetail'
export const useMusicListShow = () => {
    const { changeRouter } = handleRouter()
    const musicListStore = useMusicListStore()

    /**
     * 歌单详情页
     * @param musicid 歌单的id
     */
    const gotoMusicList = (musicid: number) => {
        musicListStore.musicListId = musicid
        changeRouter("musiclistshow")

    }
    /**
     * 获取当前歌单列表
     */
    const MusicListDetail = (): Promise<PlayList> => {
        return new Promise((resolve, rej) => {
            let MusicListDetailObj: PlayList = {} as PlayList
            if (musicListStore.musicListId !== 0) {
                getMusicListDetail(musicListStore.musicListId).then(res => {
                    MusicListDetailObj = res.data.playlist
                    getUserDetail(res.data.playlist.userId).then(res => {
                        MusicListDetailObj.userInfo = res.data.profile
                        resolve(MusicListDetailObj)
                    })
                })
            }
        })
    }

    return {
        gotoMusicList,
        MusicListDetail
    }
}