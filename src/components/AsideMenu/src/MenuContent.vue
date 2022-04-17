<template>
    <div class="menu_content">
        {{ title }}
    </div>
</template>

<script setup lang="ts">
import "../style/menu_content.less";
interface MenuContent {
    title: string;
}
withDefaults(defineProps<MenuContent>(), {
    title: "",
});
</script>
