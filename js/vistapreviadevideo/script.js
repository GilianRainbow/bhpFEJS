console.log("page loaded...");

function playVideo(vid) {
    vid.play();
}

function pauseVideo(vid) {
    vid.pause();
    vid.currentTime = 0;
}
function login(element) {
    if(element.innerText == "Entrar") {
        element.innerText = "Salir";
    } else {
        element.innerText = "Entrar";
    }
}
function subscribe(element) {
    if(element.innerText == "Suscribirme") {
        element.innerText = "Suscrito";
    } else {
        element.innerText = "Suscribirme";
    }
}