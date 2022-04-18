<template>
    <div class="find_music">
        <div class="findmusic_treetag">
            <TreeTagGroup :TreeTagList="TreeTagList"></TreeTagGroup>
        </div>

        <div class="findmusic_content">
            <FindMusicBanner :blocks="bannerList"></FindMusicBanner>
            <FindMusicItem title="推荐歌单">
                <FindMusicItemRecommendMusic
                    :dailyRecommendMusicList="dailyRecommendMusicList"
                ></FindMusicItemRecommendMusic>
            </FindMusicItem>
        </div>
    </div>
</template>

<script setup lang="ts">
import "../style/find_music.less";
import { onUpdated, ref } from "vue";
import { TreeTagList } from "@/config/FindMusic_TreeTag";
import { getHomeAd } from "@/api/getHomeAd";
import {
    getLogoutRecommendMusicList,
    getLoginRecommendMusicList,
} from "@/api/getRecommendMusicList";
import TreeTagGroup from "@/components/TreeTagGroup/src/TreeTagGroup.vue";
import FindMusicBanner from "@/components/FindMusicBanner/src/FindMusicBanner.vue";
import FindMusicItem from "@/components/FindMusicItem/src/FindMusicItem.vue";
import FindMusicItemRecommendMusic from "@/components/FindMusicItemRecommendMusic/src/FindMusicItemRecommendMusic.vue";

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
