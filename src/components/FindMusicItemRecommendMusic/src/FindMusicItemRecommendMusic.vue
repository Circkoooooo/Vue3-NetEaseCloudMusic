<template>
    <div class="findmusicitem_recommendmusic">
        <div
            class="musiclist_item"
            v-for="item in dailyRecommendMusicList"
            :key="item.id"
        >
            <img :src="item.picUrl" />
            <div class="item_text">{{ item.name }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import "../style/findmusicitem_recommendmusic.less";
import type { DailyRecommendMusicList } from "@/composabels/useFindMusicRecommendMusic";

withDefaults(
    defineProps<{
        dailyRecommendMusicList: DailyRecommendMusicList[];
    }>(),
    {}
);
</script>
