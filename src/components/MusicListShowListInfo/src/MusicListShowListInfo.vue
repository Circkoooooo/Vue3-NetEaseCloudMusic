<template>
    <div class="musiclistshow_listinfo">
        <div class="listinfo_left">
            <div class="listinfoleft_img">
                <img :src="playList.coverImgUrl" />
            </div>
        </div>
        <div class="listinfo_right">
            <div class="listinforight_title">
                <span class="listinfotitle_tag">歌单</span>
                <p>{{ playList.name }}</p>
            </div>
            <div class="listinforight_userinfo">
                <span class="userinfo_avatar">
                    <img :src="playList.userInfo.avatarUrl" />
                </span>
                <div class="userinfo_nickname">
                    <p>{{ playList.userInfo.nickname }}</p>
                </div>
                <div class="listinfo_createtime">
                    {{ timestampToDate(playList.createTime) }}创建
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import "../style/musiclistshow_listinfo.less";
import { ref } from "vue";
import { useMusicListShow } from "@/composabels/useMusicListShow";
import { setLocalStorage, getLocalStorage } from "@/utils/handleLocalStorage";
import { timestampToDate } from "@/utils/timestampToDate";
import type { PlayList } from "@/model/PlayList";

const { MusicListDetail } = useMusicListShow();
const playList = ref<PlayList>({} as PlayList);
//设置缓存
const playListStorage = getLocalStorage("playlist");

if (playListStorage) {
    playList.value = JSON.parse(playListStorage);
}
MusicListDetail().then((res) => {
    playList.value = res;
    setLocalStorage({ key: "playlist", value: playList.value });
});
</script>
