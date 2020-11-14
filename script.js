var prev = document.getElementById("prev");
var next = document.getElementById("next");
var gf = document.getElementById("gf");
var tokped = document.getElementById("tokped");
var ig = document.getElementById("ig");
var thumbnail = document.getElementsByClassName("thumbnail");
var main = document.getElementById("main");

var backgroundImg = new Array(
    "media/coffee.png",
    "media/background2.jpg"
);

let i = 1;
next.onclick = function() {
    if(i < 2) {
        main.style.backgroundImage = 'url("'+backgroundImg[i+1]+'")';
        thumbnail[i + i].classList.add("active");
        thumbnail[i].classList.remove("active");
        i++;
    }
}

prev.onclick = function() {
    if(i > 0) {
        main.style.backgroundImage = 'url("'+backgroundImg[i-1]+'")';
        thumbnail[i - i].classList.add("active");
        thumbnail[i].classList.remove("active");
        i--;
    }
}

gf.onclick = function() {
    window.location.href = "https://gofood.co.id/english/batam/restaurant/coffeegram-ruko-grand-niaga-mas-b-36-37-00da2867-f996-4bb6-8223-4af1dd14a425"
}

tokped.onclick = function() {
    window.location.href = "https://www.tokopedia.com/coffeegram"
}

ig.onclick = function() {
    window.location.href = "https://www.instagram.com/coffeegram.btm/"
}