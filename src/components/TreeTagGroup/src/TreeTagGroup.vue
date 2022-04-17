<template>
    <div class="treetag_group">
        <div class="tag" v-for="(list, key) in TreeTagList" :key="key">
            <p>{{ list.name }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import "../style/treetag_group.less";

interface TreeTag {
    TreeTagList: Array<{
        name: string;
    }>;
}
withDefaults(defineProps<TreeTag>(), {});
</script>
