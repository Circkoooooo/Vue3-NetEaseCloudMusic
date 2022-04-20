<template>
    <div class="aside_menugroup">
        <div class="title">
            {{ groupTitle }}
        </div>
        <AsideMenu
            v-for="(item, key) in menuList"
            :key="key"
            :title="item.title"
            :link="item.link"
            @click="$emit('emitChangeAside', item.link)"
            :class="{ aside_menu_check: currentAside === item.link }"
        ></AsideMenu>
    </div>
</template>
<script setup lang="ts">
import "../style/aside_menugroup.less";
import AsideMenu from "@/components/AsideMenu/src/AsideMenu.vue";
defineEmits(["emitChangeAside"]);
interface MenuGroup {
    groupTitle: string | undefined;
    menuList: Array<{
        title: string;
        link: string;
    }>;
    currentAside: string;
}

withDefaults(defineProps<MenuGroup>(), {});
</script>
