<template>
    <div class="aside_menu">
        <MenuContent :title="title" @click="changeRouter"></MenuContent>
    </div>
</template>
<script setup lang="ts">
import "../style/aside_menu.less";
import MenuContent from "./MenuContent.vue";
import { useRouter } from "vue-router";
const router = useRouter();

const props = defineProps({
    title: "",
    link: "",
});

const changeRouter = () => {
    router.push(props.link);
};
</script>
