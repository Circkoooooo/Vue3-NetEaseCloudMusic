import { handleRouter } from '@/composabels/handleRouter'
import { useMusicListStore } from '@/store/musiclist'
import { getMusicListDetail } from '@/api/getMusicListDetail'
import { PlayList } from '@/model/PlayList'
import { getUserDetail } from '@/api/getUserDetail'
import type { Track } from "@/model/Track";
import { computed, ref } from 'vue'
import { sortByString } from '@/utils/sortByString'
import { getSongUrl } from '@/api/getSongUrl'
import { usePlayMusic } from './usePlayMusic'

const { changeMusic } = usePlayMusic()
export const useMusicListShow = () => {
    const { changeRouter } = handleRouter()
    const musicListStore = useMusicListStore()
    const songDetails = ref<Track[]>();
    const isShowDescription = ref(false)
    const sortMenu = ref([
        { k: "musicname", v: 0 },
        { k: "singername", v: 0 },
        { k: "cd", v: 0 },
        { k: "musiclong", v: 0 }
    ])
    const currentSort = computed(() => {
        for (const item of sortMenu.value) {
            if (item.v !== 0) {
                return item
            }
        }
        return -1
    })
    const sortSongDetails = computed(() => {
        if (currentSort.value === -1) {
            return songDetails.value
        }
        const songDetailClone = songDetails.value?.slice()
        for (const item of sortMenu.value) {
            if (currentSort.value?.k === item.k) {
                if (currentSort.value.v === 1) {
                    return songDetailClone?.sort((a, b) => {
                        if (item.k === "musicname") {
                            return sortByString(a.name, b.name, 1)
                        }
                        if (item.k === "singername") {
                            return sortByString(a.ar[0].name, b.ar[0].name, 1)
                        }
                        if (item.k === "cd") {
                            return a.al.name.localeCompare(b.al.name)
                        }
                        if (item.k === "musiclong") {
                            return a.dt - b.dt
                        }
                        return 0
                    })
                } if (currentSort.value.v === 2) {
                    return songDetailClone?.sort((a, b) => {
                        if (item.k === "musicname") {
                            return b.name.localeCompare(a.name)
                        }
                        if (item.k === "singername") {
                            return b.ar[0].name.localeCompare(a.ar[0].name)
                        }
                        if (item.k === "cd") {
                            return b.al.name.localeCompare(a.al.name)
                        }
                        if (item.k === "musiclong") {
                            return b.dt - a.dt
                        }
                        return 0
                    })
                }
            }
        }
    })

    /**
     * 歌单详情页
     * @param musicid 歌单的id
     */
    const gotoMusicList = (musicid: number | undefined) => {
        if (musicid !== undefined) {
            musicListStore.musicListId = musicid
            changeRouter("musiclistshow")
        }
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

    /**
     * 开启或关闭歌单描述
     */
    const changeShowDescription = () => {
        isShowDescription.value = !isShowDescription.value
    }

    // 将音乐列表的id汇总成用逗号隔开的形式
    const getMusicListIds = (musicList: PlayList) => {
        const strArr = []
        for (let i = 0; i < musicList.trackIds.length; i++) {
            strArr[i] = musicList.trackIds[i].id
        }
        return strArr.join(",")
    }

    /**
     * 根据某一个选择来改变排序
     */
    const sortByMenu = (menu: string) => {
        for (const item of sortMenu.value) {
            if (item.k === menu) {
                if (item.v === 0) {
                    item.v = 1
                } else if (item.v === 1) {
                    item.v = 2
                } else {
                    item.v = 0
                }
            } else {
                item.v = 0
            }
        }
    }

    /**
     * 获取当前是否是排序状态
     */
    const getSortMenu = (k: string) => {
        for (const item of sortMenu.value) {
            if (item.k === k) {
                if (item.v === 0) {
                    return ''
                } else if (item.v === 1) {
                    return "升序"
                } else {
                    return "降序"
                }
            }
        }
    }

    /**
     * 尝试播放音乐
     * 判断是否音乐可用
     * 判断是否音乐有权限播放
     * 播放音乐
     * @param musicId
     * @param musicInfo
     */
    const tryPlayMusic = async (musicId: number, musicInfo: Track) => {
        await getSongUrl(musicId).then(res => {
            changeMusic(res.data.data[0].url, musicInfo)
        })
    }

    return {
        songDetails,
        gotoMusicList,
        MusicListDetail,
        isShowDescription,
        changeShowDescription,
        getMusicListIds,
        sortByMenu,
        getSortMenu,
        sortSongDetails,
        currentSort,
        tryPlayMusic
    }
}