import { ref } from "vue";

export interface BannerList {
    blocks: Array<{
        pic: string;
        url: string;
    }>;
}

export const useFindMusicBanner = (props: BannerList) => {
    const banner = props
    const left = ref(1)
    const timer = ref()
    /**
     * 下一张
     */
    const next = () => {
        initTimer()
        left.value = (left.value + 1) % banner.blocks.length
    }

    /**
     * 上一张
     */
    const pre = () => {
        initTimer()
        left.value = (left.value - 1) !== 0 ? (left.value - 1) % banner.blocks.length : (banner.blocks.length)
    }

    const changeTimer = () => {
        timer.value = setInterval(() => {
            next()
        }, 5000)
    }
    const initTimer = () => {
        clearInterval(timer.value)
        timer.value = setInterval(() => {
            next()
        }, 5000)

    }

    /**
     * 通过底部的hover来切换
     */
    const bottomChange = (index: number) => {
        clearInterval(timer.value)
        left.value = index + 1
    }

    return {
        left,
        banner,
        pre,
        next,
        changeTimer,
        bottomChange
    }
}
