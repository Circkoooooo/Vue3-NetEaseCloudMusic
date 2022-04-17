<template>
    <div class="find_music">
        <div class="findmusic_treetag">
            <TreeTagGroup :TreeTagList="TreeTagList"></TreeTagGroup>
        </div>

        <div class="findmusic_content">
            <FindMusicBanner :blocks="bannerList"></FindMusicBanner>
        </div>
    </div>
</template>

<script setup lang="ts">
import "../style/find_music.less";
import { ref } from "vue";
import TreeTagGroup from "@/components/TreeTagGroup/src/TreeTagGroup.vue";
import FindMusicBanner from "@/components/FindMusicBanner/src/FindMusicBanner.vue";
import { TreeTagList } from "@/config/FindMusic_TreeTag";
import { getHomeAd } from "@/api/getHomeAd";

const bannerList = ref();
getHomeAd().then((res) => {
    bannerList.value = res.data.data.blocks[0].extInfo.banners;
});
</script>
