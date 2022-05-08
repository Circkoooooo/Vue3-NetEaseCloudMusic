export const musicCurrentTimeToTime = (currentTime: number) => {
    if (!isNaN(currentTime)) {
        var m = Math.floor((currentTime / 60)) < 10 ? `0${Math.floor(currentTime / 60)}` : Math.floor(currentTime / 60)
        var s = Math.floor((currentTime % 60)) < 10 ? `0${Math.floor(currentTime % 60)}` : Math.floor(currentTime % 60)
        return `${m}:${s}`
    } else {
        return "00:00"
    }

}