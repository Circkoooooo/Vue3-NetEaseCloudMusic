<template>
    <div class="findmusicitem_recommendmusic">
        <MusicListCard
            v-for="item in dailyRecommendMusicList"
            :musiclist="item"
        ></MusicListCard>
    </div>
</template>

<script setup lang="ts">
import "../style/findmusicitem_recommendmusic.less";
import type { MusicList } from "@/model/MusicList";
import { numberToCh } from "@/utils/numberToCh";
import MusicListCard from "@/components/MusicListCard/src/MusicListCard.vue";
interface DailyRecommendMusicList {
    dailyRecommendMusicList: MusicList;
}
withDefaults(
    defineProps<{
        dailyRecommendMusicList: DailyRecommendMusicList;
    }>(),
    {}
);
</script>
