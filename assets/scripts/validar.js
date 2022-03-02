"use strict"
// Elementos del DOM
const nombre = document.getElementById("nombre");
const tel = document.getElementById("telefono");
const correo = document.getElementById("correo");
const mensaje = document.getElementById("mensaje");
const boton = document.getElementById("enviar");

//Handler
const validar = function v() {
    const cValor = correo.value.trim();
    const cMensaje = mensaje.value.trim();
    let errores='';
    if (nombre.value.trim()==="") {
        nombre.classList.add("border-danger", "border-3");
        errores+="<p class='errores'>Ingrese un nombre.</p>";
    }
    else {
        nombre.classList.remove("border-danger", "border-3");
    }

    if (cValor==="") {
        correo.classList.add("border-danger", "border-3");
        errores+="<p class='errores'>Ingrese un E-Mail</p>";
    }
    else if (cValor.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi)===null ) {
        correo.classList.add("border-danger", "border-3");
        errores+="<p class='errores'>No es un E-Mail válido</p>";
        }
        else {
            correo.classList.remove("border-danger", "border-3");
        }

    if (isNaN(tel.value) || tel.value==='') {
        tel.classList.add("border-danger", "border-3");
        errores+="<p class='errores'>Ingrese un teléfono. Solo se permiten números.</p>";
    }
    else {
        tel.classList.remove("border-danger", "border-3");
    }
    if (cMensaje==="") {
        mensaje.classList.add("border-danger", "border-3");
        errores+="<p class='errores'>No te olvides dejarme un mensaje. :)</p>";
    }
    else {
        mensaje.classList.remove("border-danger", "border-3");
    }
    document.getElementById("errores").innerHTML=errores;
}

//Event Listeners

boton.addEventListener("click",validar);