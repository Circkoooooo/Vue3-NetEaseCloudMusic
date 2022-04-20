<template>
    <div class="aside_menu">
        <MenuContent :title="title"></MenuContent>
    </div>
</template>
<script setup lang="ts">
import "../style/aside_menu.less";
import MenuContent from "./MenuContent.vue";

withDefaults(
    defineProps<{
        title: string;
        link: string;
    }>(),
    {
        title: "",
        link: "",
    }
);
</script>
