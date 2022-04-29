<template>
    <div class="listshow_musicitem_header">
        <div class="handler">操作</div>
        <div class="name">标题</div>
        <div>歌手</div>
        <div>专辑</div>
        <div>时间</div>
    </div>
    <div
        v-for="(item, key) in track"
        :key="key"
        class="listshow_musicitem"
        :class="{ odd: key % 2 !== 0, even: key % 2 === 0 }"
    >
        <div class="listshow_musicindex">{{
            key + 1 < 10 ? "0" + (key + 1) : key + 1
        }}</div>
        <div class="listshow_musicname">
            {{ item.name }}
        </div>
    </div>
</template>
<script setup lang="ts">
import "../style/musiclistshow_musiclist.less";
import type { Track } from "@/model/Track";
withDefaults(
    defineProps<{
        track: Track[];
    }>(),
    {}
);
</script>
