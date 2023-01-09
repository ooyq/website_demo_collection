fetch('https://v1.hitokoto.cn')
.then(response => response.json())
.then(data => {
    document.getElementById("word").innerHTML = data.hitokoto;
})
.catch(console.error)

document.getElementById("btn1").onclick = function(){
    window.open("happynewyear.html");
}
document.getElementById("btn2").onclick = function(){
    window.open("love.html");
}
document.getElementById("btn3").onclick = function(){
    window.open("search.html");
}
document.getElementById("btn4").onclick = function(){
    window.open("timestamp.html");
}
document.getElementById("btn5").onclick = function(){
    window.open("cat.html");
}
document.getElementById("btn6").onclick = function(){
    window.open("start.html");
}

// Music
function audioAutoPlay(id) {
    var audio = document.getElementById(id),
        play = function () {
            audio.play();
            document.removeEventListener("touchstart", play, false);
        };
    audio.play();
    document.addEventListener("WeixinJSBridgeReady", function () {//微信
        play();
    }, false);
    document.addEventListener("touchstart", play, false);
}
audioAutoPlay('music');