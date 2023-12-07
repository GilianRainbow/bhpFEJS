function incrementar(){
    let contador = document.getElementById("contador");
    contador.textContent = Number(contador.textContent) + 1;
}
function soportadoPor(marca){
    alert("Esto es soportado por " + marca.alt)
}
let allImg = []
let ImgIndex = 0;
function cambiarImagen (numero) {
    ImgIndex += numero;
    let imgPrincipal = document.getElementById("imgPrincipal");
    imgPrincipal.src = allImg[imgIndex];
}