<template>{{ playList }}</template>

<script setup lang="ts">
import { useMusicListShow } from "@/composabels/useMusicListShow";
import { onMounted, ref } from "vue";
const { MusicListDetail } = useMusicListShow();
const playList = ref();
onMounted(async () => {
    playList.value = await MusicListDetail();
    console.log(playList.value);
});
</script>
