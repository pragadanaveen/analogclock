var s = 0, m = 0, h = 0;
function updateClock() {
    s++;
    const secondsDeg = ((s / 60) * 360) + 0;
    document.querySelector('.second').style.transform = ` rotate(${secondsDeg}deg)`;

    const minutesDeg = ((m / 60) * 360) + ((s / 60) * 6) + 0;
    document.querySelector('.minute').style.transform = ` rotate(${minutesDeg}deg)`;

    const hoursDeg = ((h / 12) * 360) + ((m / 60) * 30) + 0;
    document.querySelector('.hour').style.transform = ` rotate(${hoursDeg}deg)`;

}
setInterval(updateClock, 1000);
updateClock();