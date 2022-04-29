<template>
    <div class="find_music">
        <div class="findmusic_treetag">
            <TreeTagGroup :TreeTagList="TagObjList"></TreeTagGroup>
        </div>
        <div class="findmusic_content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup lang="ts">
import "../style/find_music.less";
import TreeTagGroup from "@/components/TreeTagGroup/src/TreeTagGroup.vue";
import { useFindMusic } from "@/composabels/useFindMusic";
const { TagObjList } = useFindMusic();
</script>
