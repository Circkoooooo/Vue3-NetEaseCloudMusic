<template>
    <div class="musiclist_item" @click="gotoMusicList(musiclist.id)">
        <div class="item_img">
            <img :src="musiclist.picUrl" />
            <div class="item_listinfo">
                <div class="listinfo_playcount">
                    <img src="@/assets/icon/play-outer.png" />
                    {{ numberToCh(musiclist.playCount) }}
                </div>
                <div class="listinfo_imgplay">
                    <img src="@/assets/icon/play-inner_red.png" />
                </div>
            </div>
        </div>
        <div class="item_text">{{ musiclist.name }}</div>
    </div>
</template>

<script setup lang="ts">
import type { MusicList } from "@/model/MusicList";
import { numberToCh } from "@/utils/numberToCh";
import { useMusicListShow } from "@/composabels/useMusicListShow";
const { gotoMusicList } = useMusicListShow();

interface MusicListCard {
    musiclist: MusicList;
}
withDefaults(defineProps<MusicListCard>(), {});
</script>
