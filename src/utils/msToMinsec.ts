export const msToMinsec = (ms: number) => {
    var min = Math.floor((ms / 1000 / 60) << 0);
    var sec = Math.floor((ms / 1000) % 60) < 10 ? Math.floor((ms / 1000) % 60) + "0" : Math.floor((ms / 1000) % 60);
    return min + ':' + sec;
}