<template>
    <div class="playmenu_bar">
        <div class="bar_now">{{ nowTime }}</div>
        <div class="bar_outer">
            <div
                class="bar_inner"
                @click="$emit('clickProgress', $event)"
                id="music-progress-bar"
            >
                <div class="bar_inner_progress_background">
                    <div
                        class="bar_inner_progress"
                        :style="{ width: calcProgress + '%' }"
                    ></div>
                </div>
                <div
                    class="bar_inner_progress_outer"
                    :style="{ width: calcProgress + '%' }"
                ></div>
            </div>
        </div>
        <div class="bar_end">{{ musicLong }}</div>
    </div>
</template>

<script setup lang="ts">
defineEmits(["clickProgress"]);
withDefaults(
    defineProps<{
        url: string;
        nowTime: string;
        musicLong: string;
        musicLongNumber: {
            nowTime: number;
            musicLong: number;
        };
        calcProgress: number;
    }>(),
    {}
);
</script>
