<template>
    <div class="findmusic_item">
        <div class="findmusicitem_title">{{ title }}</div>
        <slot></slot>
    </div>
</template>

<script lang="ts" setup>
import "../style/findmusic_item.less";
interface FindMusicItem {
    title: string;
}
withDefaults(defineProps<FindMusicItem>(), {});
</script>
