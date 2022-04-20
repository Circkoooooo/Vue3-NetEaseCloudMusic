import { TreeTagList } from "@/config/FindMusic_TreeTag";
import { computed, ref } from "vue";
import { handleRouter } from "@/composabels/handleRouter";
export type tempObj = {
    name: string,
    link?: string
}[]
export const useFindMusic = () => {
    const { changeChildRouter } = handleRouter()
    const currentIndex = ref(0)

    /**
    * 将config数据计算成对象数据
    */
    const TagObjList = computed(() => {
        let tempObjList: tempObj = []
        for (let item of TreeTagList) {
            tempObjList.push({
                name: item.name,
                link: item.link
            })
        }
        return tempObjList
    })

    /**
     * 接受一个索引，改变currentIndex为索引值，切换路由
     * @param index 
     */
    const changeBannerTag = (index: number, link: string) => {
        currentIndex.value = index
        changeChildRouter(link)
    }

    return {
        TagObjList,
        currentIndex,
        changeBannerTag
    }
}