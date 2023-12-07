function saludame(){
    alert("Holanda como andamio");
}


function esconder(elemento){
    elemento.remove();
}


function modificar(elemento) {
    
    if(elemento.innerText == "Login") {
        elemento.innerText = "Logout";
    } else {
        elemento.innerText = "Login";
    }
}