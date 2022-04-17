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
    /**
     * 下一张
     */
    const next = () => {
        left.value = (left.value + 1) % banner.blocks.length
        // const length = banner.blocks.length
        // const end = banner.blocks[length - 1]
        // banner.blocks.pop()
        // banner.blocks.unshift(end)

    }

    return {
        left,
        next,
        banner
    }
}
