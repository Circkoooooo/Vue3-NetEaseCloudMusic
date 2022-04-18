<template>
    <div class="findmusic_banner">
        <div class="img_box">
            <img
                class="banner_img"
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
            <div class="change_btn">
                <div class="change_left" @click="pre">
                    <img src="@/assets/icon/right.png" />
                </div>
                <div class="change_right" @click="next">
                    <img src="@/assets/icon/right.png" />
                </div>
            </div>
        </div>
        <div class="change_bottom">
            <div
                class="bottom_box"
                v-for="(_, key) in banner.blocks"
                @mouseenter="bottomChange(key)"
                :class="{
                    bottom_box_now: left - 1 === key,
                }"
            ></div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import "../style/findmusic_banner.less";
import { useFindMusicBanner } from "@/composabels/useFindMusicBanner";
import { onMounted } from "vue";
interface BannerList {
    blocks: Array<{
        pic: string;
        url: string;
    }>;
}

const props = withDefaults(defineProps<BannerList>(), {});
const { next, pre, banner, left, changeTimer, bottomChange } =
    useFindMusicBanner(props);
onMounted(() => {
    changeTimer();
});
</script>
