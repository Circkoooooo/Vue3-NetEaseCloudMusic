<template>
    <div class="playmenu_bar">
        <div class="bar_now">{{ nowTime }}</div>
        <input
            type="range"
            class="bar_outer"
            :max="10000"
            :value="(musicLongNumber.nowTime / musicLongNumber.musicLong) * 10000"
            :setp="musicLongNumber.musicLong / 10000"
        />
        <div class="bar_end">{{ musicLong }}</div>
    </div>
</template>

<script setup lang="ts">

withDefaults(
    defineProps<{
        url: string;
        nowTime: string;
        musicLong: string;
        musicLongNumber: {
            nowTime: number;
            musicLong: number;
        };
    }>(),
    {}
);
</script>
