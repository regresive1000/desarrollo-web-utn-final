// constantes de cada seccion del portafolio
const login = document.getElementById("login");
const register = document.getElementById("register");
const formularios = document.getElementById("formularios");
const iniciarsesion = document.getElementById("iniciar-sesion");
const iniciarRegistro = document.getElementById("iniciar-registro");

const navegador = document.getElementById("navegador")
const carousel = document.getElementById("carousel")
const separador_del_medio = document.getElementById("separador_del_medio")
const articulos=document.getElementById("articulos")
const formulario_de_contacto = document.getElementById("formulario_de_contacto")
const footer = document.getElementById("footer")



function iniciarLogin() {
    const login = document.getElementById("container-login");
    login.style.display = "block";
    navegador.style.display = "none"
    carousel.style.display = "none"
    separador_del_medio.style.display = "none"
    articulos.style.display="none"
    formulario_de_contacto.style.display = "none"
    footer.style.display = "none"

}

function finalizarLogin() {
    const login = document.getElementById("container-login");
    if (window.innerWidth > 566) {
        login.style.display = "none";
        navegador.style.display = "block"
        carousel.style.display = "block"
        separador_del_medio.style.display = "block"
        articulos.style.display="flex"        
        formulario_de_contacto.style.display = "flex"
        footer.style.display = "block"

    }
    else {
        login.style.display = "none";


    }

}


function registrarse() {
    if (window.innerWidth > 566) {
        register.style.display = "block"
        formularios.style.left = "50%"
        login.style.display = "none"
        iniciarsesion.style.opacity = "1"
        iniciarRegistro.style.opacity = "0"
    }
    else {
        register.style.display = "block"
        formularios.style.left = "0%"
        login.style.display = "none"
        iniciarsesion.style.opacity = "1"
        iniciarRegistro.style.opacity = "0"
    }
}
function iniciaSesion() {
    register.style.display = "none"
    formularios.style.left = "0%"
    login.style.display = "block"
    iniciarsesion.style.opacity = "0"
    iniciarRegistro.style.opacity = "1"

    register.style.display = "none"
    formularios.style.left = "0%"
    login.style.display = "block"
    iniciarsesion.style.opacity = "0"
    iniciarRegistro.style.opacity = "1"
}