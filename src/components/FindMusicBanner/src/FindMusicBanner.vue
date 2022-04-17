<template>
    <div class="findmusic_banner">
        <div class="img_box" @click="next">
            <img
                v-for="(item, key) in banner.blocks"
                :key="key"
                :src="item.pic"
                :class="{
                    img_left: key === left % banner.blocks.length,
                    img_now_center: key === (left + 1) % banner.blocks.length,
                    img_right: key === (left + 2) % banner.blocks.length,
                    img_center:
                        key !== left % banner.blocks.length &&
                        key !== (left + 2) % banner.blocks.length,
                }"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import "../style/findmusic_banner.less";
import { useFindMusicBanner } from "./useFindMusicBanner";
interface BannerList {
    blocks: Array<{
        pic: string;
        url: string;
    }>;
}

const props = withDefaults(defineProps<BannerList>(), {});
const { next, banner, left } = useFindMusicBanner(props);
</script>
