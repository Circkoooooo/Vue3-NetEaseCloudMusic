<template>
    <TreeTagGroup :TreeTagList="tagConfig"></TreeTagGroup>
</template>

<script setup lang="ts">
import "../style/musiclistshow_menu.less";
import TreeTagGroup from "@/components/TreeTagGroup/src/TreeTagGroup.vue";

const tagConfig = [
    {
        name: "歌曲列表",
        link: "musiclist",
    },
    {
        name: "评论",
        link: "comment",
    },
    {
        name: "收藏者",
    },
];
</script>
