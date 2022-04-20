<template>
    <div class="treetag_group">
        <div
            class="tag"
            v-for="(list, key) in TreeTagList"
            :key="key"
            :class="{ now_tag: key == currentIndex }"
            @click="changeBannerTag(key, list.link)"
        >
            <p>{{ list.name }}</p>
            <span class="tag_bottombar" v-if="key === currentIndex"></span>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { tempObj } from "@/composabels/useFindMusic";
import "../style/treetag_group.less";
import { useFindMusic } from "@/composabels/useFindMusic";
const { changeBannerTag, currentIndex } = useFindMusic();
interface TreeTag {
    TreeTagList: tempObj;
}
withDefaults(defineProps<TreeTag>(), {});
</script>
