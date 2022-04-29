<template>
    <div class="musiclistshow_listinfo">
        <div class="listinfo_left">
            <div class="listinfoleft_img">
                <img :src="playList.coverImgUrl" />
            </div>
        </div>
        <div class="listinfo_right">
            <div class="listinforight_title">
                <span class="listinfotitle_tag">歌单</span>
                <p>{{ playList.name }}</p>
            </div>
            <div class="listinforight_userinfo">
                <div class="userinfo_avatar">
                    <img :src="playList.userInfo.avatarUrl" />
                </div>
                <div class="userinfo_nickname">
                    <p>{{ playList.userInfo.nickname }}</p>
                </div>
                <div class="listinfo_createtime">
                    {{ timestampToDate(playList.createTime) }}创建
                </div>
            </div>
            <div class="listinforight_buttongroup">
                <div class="listinfo_playall">
                    <span class="play_icon"
                        ><img src="@/assets/icon/play.png"
                    /></span>
                    <span>播放全部</span>
                    <span class="add_icon"
                        ><img src="@/assets/icon/add.png" alt=""
                    /></span>
                </div>
            </div>
            <div class="listinforight_musictag">
                标签:
                <span
                    class="listinfo_musictag"
                    v-for="(item, key) in playList.tags"
                    :key="key"
                >
                    {{ item }}
                    <span
                        class="musictag_suffix"
                        v-if="key < playList.tags.length - 1"
                        >/</span
                    >
                </span>
            </div>
            <div class="listinforight_countinfo">
                歌曲:<span class="listinfo_trackcount">
                    {{ playList.trackCount }}
                </span>
                播放:<span class="playcount_playcount"
                    >{{ numberToAbout(playList.playCount) }}
                </span>
            </div>
            <div class="listinforight_description">
                简介:
                <span class="listinfo_description">
                    {{
                        isShowDescription
                            ? playList.description
                            : playList.description
                                  .split(/[(\r\n)\r\n]+/)[0]
                                  .substring(0, 20) + "..."
                    }}
                </span>
                <span
                    class="description_show"
                    @click="$emit('changeShowDescription')"
                >
                    <img
                        class="description_show_norotate"
                        :class="{
                            description_show_rotate: isShowDescription,
                        }"
                        src="@/assets/icon/selectdown.png"
                    />
                </span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import "../style/musiclistshow_listinfo.less";
import { timestampToDate } from "@/utils/timestampToDate";
import { numberToAbout } from "@/utils/numberToAbout";
import type { PlayList } from "@/model/PlayList";

defineEmits(["changeShowDescription"]);
withDefaults(
    defineProps<{
        playList: PlayList;
        isShowDescription: boolean;
    }>(),
    {}
);
</script>
