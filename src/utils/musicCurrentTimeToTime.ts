export const musicCurrentTimeToTime = (currentTime: number) => {
    var m = Math.floor((currentTime / 60)) < 10 ? `0${Math.floor(currentTime / 60)}` : Math.floor(currentTime / 60)
    var s = Math.floor((currentTime % 60)) < 10 ? `0${Math.floor(currentTime % 60)}` : Math.floor(currentTime % 60)
    return `${m}:${s}`

}