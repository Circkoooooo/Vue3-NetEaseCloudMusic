<template>
    <FindMusicBanner :blocks="bannerList"></FindMusicBanner>
    <FindMusicItem title="推荐歌单">
        <FindMusicItemRecommendMusic
            :dailyRecommendMusicList="dailyRecommendMusicList"
        ></FindMusicItemRecommendMusic>
    </FindMusicItem>
</template>

<script setup lang="ts">
import { ref } from "vue";
import FindMusicBanner from "@/components/FindMusicBanner/src/FindMusicBanner.vue";
import FindMusicItem from "@/components/FindMusicItem/src/FindMusicItem.vue";
import FindMusicItemRecommendMusic from "@/components/FindMusicItemRecommendMusic/src/FindMusicItemRecommendMusic.vue";
import type { MusicList } from "@/model/MusicList";
import type { Blocks } from "@/model/BannerList";
import { getHomeAd } from "@/api/getHomeAd";
import {
    getLogoutRecommendMusicList,
    getLoginRecommendMusicList,
} from "@/api/getRecommendMusicList";

interface FindMusicRecommendProps {
    bannerList: Blocks;
    dailyRecommendMusicList: MusicList[];
}
withDefaults(defineProps<FindMusicRecommendProps>(), {});

const bannerList = ref();
const dailyRecommendMusicList = ref();
getHomeAd().then((res) => {
    bannerList.value = res.data.data.blocks[0].extInfo.banners;
});
//先默认获取未登录的，后期用pinia来控制全局登录状态，从而获取不同的数据
getLogoutRecommendMusicList(10).then((res) => {
    dailyRecommendMusicList.value = res.data.result;
});
</script>
