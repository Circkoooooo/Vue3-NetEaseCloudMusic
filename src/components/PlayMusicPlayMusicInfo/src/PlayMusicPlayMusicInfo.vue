<template>
    <div class="playmusic_playmusicinfo">
        <div class="playmusic_icon">
            <img v-if="musicInfo.al.picUrl" :src="musicInfo.al.picUrl" />
            <img v-else src="@/assets/icon/appicon.png" />
        </div>
        <div class="playmusic_info">
            <div class="playmusicinfo_title">
                {{ musicInfo ? musicInfo.name : "无歌曲" }}
            </div>
            <div class="playmusicinfo_singer">
                <span v-for="(singer, key) in musicInfo.ar" :key="key">
                    {{
                        key < musicInfo.ar.length - 1
                            ? singer.name + "/"
                            : singer.name
                    }}
                </span>
                <span v-if="!musicInfo"> 无歌手 </span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import "../style/playmusic_playmusicinfo.less";
import type { Track } from "@/model/Track";
withDefaults(
    defineProps<{
        musicInfo: Track;
    }>(),
    {}
);
</script>
