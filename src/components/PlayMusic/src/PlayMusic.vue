<template>
    <div class="playmusic">
        <div class="playmusic_musicinfo_layout">
            <PlayMusicPlayMusicInfo :musicInfo="playMusicInfo">
            </PlayMusicPlayMusicInfo>
        </div>
        <div class="playmusic_playmenu_layout">
            <PlayMusicPlayMenu
                :musicStatus="musicStatus"
                :changePlay="changePlay"
                :calcProgress="calcProgress"
                @changePlay="changePlay"
                @clickProgress="clickProgress"
            ></PlayMusicPlayMenu>
        </div>
        <div class="playmusic_musicsetting_layout"></div>
    </div>
</template>

<script setup lang="ts">
import "../style/playmusic.less";
import PlayMusicPlayMenu from "@/components/PlayMusicPlayMenu/src/PlayMusicPlayMenu.vue";
import PlayMusicPlayMusicInfo from "@/components/PlayMusicPlayMusicInfo/src/PlayMusicPlayMusicInfo.vue";

import { usePlayMusic } from "@/composabels/usePlayMusic";
const { musicStatus, changePlay, clickProgress, calcProgress, playMusicInfo } =
    usePlayMusic();
</script>
