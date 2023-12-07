console.log("page loaded...");
function message() {
    alert("¡Ninja ha dado like!");
}
function login(element) {
    if(element.innerText == "Entrar") {
        element.innerText = "Salir";
    } else {
        element.innerText = "Entrar";
    }
}
function hide(el) {
    el.remove();
}