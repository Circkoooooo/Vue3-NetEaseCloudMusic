<template>
    <div class="findmusicitem_recommendmusic">
        <div
            class="musiclist_item"
            v-for="item in dailyRecommendMusicList"
            :key="item.id"
        >
            <img :src="item.picUrl" />
        </div>
    </div>
</template>

<script setup lang="ts">
import "../style/findmusicitem_recommendmusic.less";
interface DailyRecommendMusicList {
    dailyRecommendMusicList: {
        id: number;
        name: string;
        copywrite: string;
        picUrl: string;
        playcount: number;
        createTime: number;
    }[];
}

withDefaults(defineProps<DailyRecommendMusicList>(), {});
</script>
