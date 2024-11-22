import { conexionAPI } from './conexionAPI.js';

const formulario = document.querySelector("[data-formulario]");

async function crearProducto(event){

    event.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const imagen = document.querySelector("[data-imagen]").value;

try {
    await conexionAPI.enviarProducto(nombre, precio, imagen);
    window.location.href="../pages/envio-concluido.html";

} catch (error) {
    alert(error);
}

    
}

formulario.addEventListener("submit", event => crearProducto(event));