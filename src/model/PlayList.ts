import type { UserInfo } from "./UserInfo"
export type PlayList = {
    id: number,
    name: string,
    coverImgId: number,
    coverImgUrl: string,
    userId: number,
    createTime: number,
    updateTime: number,
    subscribedCount: number,
    ordered: number,
    description: string,
    tags: string[],
    playCount: number,
    trackCount: number,
    userInfo: UserInfo,
}