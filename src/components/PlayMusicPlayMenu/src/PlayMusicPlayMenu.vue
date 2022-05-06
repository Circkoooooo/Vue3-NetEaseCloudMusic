<template>
    <div class="playmusic_playmenu">
        <PlayMenuButton
            :isPlay="musicStatus.isPlay"
            @changePlay="changePlay"
        ></PlayMenuButton>
        <PlayMenuBar
            :url="musicStatus.currentMusicUrl"
            :nowTime="musicStatus.nowTime"
            :musicLong="musicStatus.musicLong"
            :musicLongNumber="musicStatus.musicLongNumber"
        ></PlayMenuBar>
    </div>
</template>

<script setup lang="ts">
import "../style/playmusic_playmenu.less";
import PlayMenuButton from "./PlayMenuButton.vue";
import PlayMenuBar from "./PlayMenuBar.vue";
import { usePlayMusic } from "@/composabels/usePlayMusic";
const { musicStatus, changePlay } = usePlayMusic();
</script>
