import type { AsideMenuGroup } from "../model/AsideMenuGroup"
export const asideMenu = <Array<AsideMenuGroup>>[
    {
        menuList: [
            {
                title: "发现音乐",
                link: "findmusic"
            },
            {
                title: "播客",
                link: "podcast"
            },
            {
                title: "视频",
                link: "video"
            },
            {
                title: "关注",
                link: "flowering"
            },
            {
                title: "直播",
                link: "live"
            },
            {
                title: "私人FM",
                link: "FM"
            },
        ]
    },
    {
        groupTitle: "我的音乐",
        menuList: [
            {
                title: "本地与下载",
                link: "localdownload",
            }
        ]
    }
]