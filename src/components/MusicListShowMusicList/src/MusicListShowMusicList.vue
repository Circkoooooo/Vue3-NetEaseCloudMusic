<template>
    <div class="listshow_musicitem_header">
        <div class="listshow_musicindex"></div>
        <div class="listshow_handler"></div>
        <div class="listshow_musicname menu">
            标题
            <span class="sort"><img src="@/assets/icon/sort.png" /></span>
        </div>
        <div class="listshow_singername menu">
            歌手
            <span class="sort"><img src="@/assets/icon/sort.png" /></span>
        </div>
        <div class="listshow_musiccd menu">
            专辑
            <span class="sort"><img src="@/assets/icon/sort.png" /></span>
        </div>
        <div class="listshow_musiclong menu">
            时长
            <span class="sort"><img src="@/assets/icon/sort.png" /></span>
        </div>
    </div>
    <div
        v-for="(item, key) in track"
        :key="key"
        class="listshow_musicitem"
        :class="{ odd: key % 2 !== 0, even: key % 2 === 0 }"
    >
        <div class="listshow_musicindex">
            {{ key + 1 < 10 ? "0" + (key + 1) : key + 1 }}
        </div>
        <div class="listshow_handler">
            <span class="handler_btn"
                ><img src="@/assets/icon/like_outer.png" />
                <img src="@/assets/icon/download.png"
            /></span>
        </div>
        <div class="listshow_musicname">
            {{ item.name }}
        </div>
        <div class="listshow_singername">
            <span v-for="(singer, key) in item.ar" :key="key">
                {{ key < item.ar.length - 1 ? singer.name + "/" : singer.name }}
            </span>
        </div>
        <div class="listshow_musiccd">
            <span>
                {{ item.al.name }}
            </span>
        </div>
        <div class="listshow_musiclong">
            <span>
                {{ msToMinsec(item.dt) }}
            </span>
        </div>
    </div>
</template>
<script setup lang="ts">
import "../style/musiclistshow_musiclist.less";
import type { Track } from "@/model/Track";
import { msToMinsec } from "@/utils/msToMinsec";
withDefaults(
    defineProps<{
        track: Track[];
    }>(),
    {}
);
</script>
