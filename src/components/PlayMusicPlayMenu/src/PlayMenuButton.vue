<template>
    <div class="playmenu_button">
        <div class="playmenu">
            <span class="pre">
                <img src="@/assets/icon/play_pre.png" />
            </span>
        </div>
        <div class="playmenu">
            <span class="play" @click="$emit('changePlay')">
                <img v-if="!isPlay" src="@/assets/icon/play_inner.png" />
                <img v-if="isPlay" src="@/assets/icon/play_pause.png" />
            </span>
        </div>
        <div class="playmenu">
            <span class="next">
                <img src="@/assets/icon/play_next.png" />
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
defineEmits(["changePlay"]);
withDefaults(
    defineProps<{
        isPlay: boolean;
    }>(),
    {}
);
</script>
