// constantes de cada seccion del portafolio
const login = document.getElementById("login");
const register = document.getElementById("register");
const formularios = document.getElementById("formularios");
const iniciarsesion = document.getElementById("iniciar-sesion");
const iniciarRegistro = document.getElementById("iniciar-registro");
const cajaTrasera__loginContenedor =document.getElementById("caja-trasera__login-contenedor")

const navegador = document.getElementById("navegador")
const carousel = document.getElementById("carousel")
const separador_del_medio = document.getElementById("separador_del_medio")
const articulos=document.getElementById("articulos")
const personalEmpresa = document.querySelector('#personal-empresa')
const donde_estamos=document.getElementById("donde-estamos")
const formulario_de_contacto = document.getElementById("formulario_de_contacto")
const footer = document.getElementById("footer")



function iniciarLogin() {
    const login = document.getElementById("container-login");
    login.style.display = "block";
    personalEmpresa.style.display = "none";
    navegador.style.display = "none";
    carousel.style.display = "none";
    separador_del_medio.style.display = "none";
    donde_estamos.style.display="none";
    articulos.style.display="none";
    formulario_de_contacto.style.display = "none";
    footer.style.display = "none";

}

function finalizarLogin() {
    const login = document.getElementById("container-login");
    if (window.innerWidth > 566) {
        login.style.display = "none";
        personalEmpresa.style.display = "flex";
        navegador.style.display = "block";
        carousel.style.display = "block";
        separador_del_medio.style.display = "block";
        donde_estamos.style.display="flex";
        articulos.style.display="flex";     
        formulario_de_contacto.style.display = "flex";
        footer.style.display = "block";

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
        cajaTrasera__loginContenedor.style.opacity="1"

    }
    else {
        register.style.display = "block"
        formularios.style.left = "0%"
        login.style.display = "none"
        iniciarsesion.style.opacity = "1"
        iniciarRegistro.style.opacity = "0"
        cajaTrasera__loginContenedor.style.opacity="1"
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

// validacion de formulario de contacto
const nombre=document.getElementById("nombre");
const email=document.getElementById("email");
const form=document.querySelector(".formulario");
const label_nombre=document.getElementById("label_nombre")
const label_email=document.getElementById("label_email")

form.addEventListener("submit",e=>{
    let advertencia=""
    let regexEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let entrar=false
    if (nombre.value.legth<1) {
        advertencia+="Debe ingresar un nombre <br>" 
        entrar=true
        
    }
    if(!regexEmail.test(email.value)){
        advertencia+="el email que ingreso no es correcto"
        entrar=true
console.log("asd");
    }
    if(entrar){
        label_nombre.innerHTML=advertencia
        label_email.innerHTML=advertencia

    }

})