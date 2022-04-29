<template>
    <div class="musiclistshow">
        <MusicListShowListInfo
            :playList="playList"
            :isShowDescription="isShowDescription"
            @changeShowDescription="changeShowDescription"
        ></MusicListShowListInfo>
        <MusicListShowMenu></MusicListShowMenu>
        <div class="musiclistshow_content">
            <router-view :track="songDetails"></router-view>
        </div>
    </div>
</template>
<script setup lang="ts">
import MusicListShowListInfo from "@/components/MusicListShowListInfo/src/MusicListShowListInfo.vue";
import MusicListShowMenu from "@/components/MusicListShowMenu/src/MusicListShowMenu.vue";
import "../style/musiclistshow.less";
import { ref } from "vue";
import { useMusicListShow } from "@/composabels/useMusicListShow";
import { setLocalStorage, getLocalStorage } from "@/utils/handleLocalStorage";
import type { Track } from "@/model/Track";
import type { PlayList } from "@/model/PlayList";
import { getSongDetail } from "@/api/getSongDetail";

const {
    MusicListDetail,
    isShowDescription,
    changeShowDescription,
    getMusicListIds,
} = useMusicListShow();
const playList = ref<PlayList>({} as PlayList);
const songDetails = ref<Track[]>();
//设置缓存
const playListStorage = getLocalStorage("playlist");

if (playListStorage) {
    playList.value = JSON.parse(playListStorage);
}
MusicListDetail().then((res) => {
    playList.value = res;
    setLocalStorage({ key: "playlist", value: playList.value });
    // 获取所有歌曲的详情
    const trackIdsStr = getMusicListIds(playList.value);
    getSongDetail(trackIdsStr).then((res) => {
        songDetails.value = res.data.songs;
    });
});
</script>
