<template>
    <Header> </Header>
    <Main>
        <template v-slot:aside>
            <Aside>
                <AsideMenuGroup
                    v-for="(item, key) in asideMenu"
                    :key="key"
                    :groupTitle="item.groupTitle"
                    :menuList="item.menuList"
                >
                </AsideMenuGroup>
            </Aside>
        </template>
        <template v-slot:content>
            <router-view></router-view>
        </template>
    </Main>
</template>
<script setup lang="ts">
import Header from "@/components/Header/src/Header.vue";
import Main from "@/components/Main/src/Main.vue";
import Aside from "@/components/Aside/src/Aside.vue";
import AsideMenuGroup from "@/components/AsideMenuGroup/src/AsideMenuGroup.vue";
import { asideMenu } from "@/config/Home_AsideMenu";
</script>
