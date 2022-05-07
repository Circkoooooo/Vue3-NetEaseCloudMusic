<template>
    <div class="playmusic_playmenu">
        <PlayMenuButton
            :isPlay="musicStatus.isPlay"
            @changePlay="$emit('changePlay')"
        ></PlayMenuButton>
        <PlayMenuBar
            :url="musicStatus.currentMusicUrl"
            :nowTime="musicStatus.nowTime"
            :musicLong="musicStatus.musicLong"
            :musicLongNumber="musicStatus.musicLongNumber"
            :calcProgress="calcProgress"
            @clickProgress="$emit('clickProgress', $event)"
        ></PlayMenuBar>
    </div>
</template>

<script setup lang="ts">
import "../style/playmusic_playmenu.less";
import PlayMenuButton from "./PlayMenuButton.vue";
import PlayMenuBar from "./PlayMenuBar.vue";
import type { MusicStatus } from "@/model/MusicStatus";
defineEmits(["changePlay", "clickProgress"]);
withDefaults(
    defineProps<{
        musicStatus: MusicStatus;
        calcProgress: number;
    }>(),
    {}
);
</script>
