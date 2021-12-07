function startTime(){
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    minutes = checkTime(minutes);
    seconds = checkTime(seconds);

    document.getElementById("clockBox").innerHTML = hours + ":" + minutes + ":" + seconds;
    setTimeout(startTime, 1000);
};

//Lägger till "0" innan, när det bara är en siffra
function checkTime(i){
    if (i < 10) {i = "0" + i};
    return i;
}