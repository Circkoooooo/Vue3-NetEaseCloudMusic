<template>
    <div class="treetag_group">
        <div
            class="tag"
            v-for="(list, key) in TreeTagList"
            :key="key"
            :class="{ now_tag: key == findmusicStore.currentIndex }"
            @click="changeBannerTag(key, list.link)"
        >
            <p>{{ list.name }}</p>
            <span
                class="tag_bottombar"
                v-if="key === findmusicStore.currentIndex"
            ></span>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { tempObj } from "@/composabels/useFindMusic";
import "../style/treetag_group.less";
import { useFindMusic } from "@/composabels/useFindMusic";
import { useFindMusicStore } from "@/store/findMusic";
const findmusicStore = useFindMusicStore();
const { changeBannerTag } = useFindMusic();

interface TreeTag {
    TreeTagList: tempObj;
}
withDefaults(defineProps<TreeTag>(), {});
</script>
