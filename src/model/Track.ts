/**
 * ar歌手
 * al专辑
 * dt歌曲时长
 */
export type Track = {
    name: string,
    id: number,
    ar: {
        id: number,
        name: string,
    }[],
    al: {
        id: number,
        name: string,
        picUrl: string
    },
    dt: number
}