import { conexionAPI } from "./conexionAPI.js";
import { initEliminarProductoListener } from './eliminarProducto.js';

const lista = document.querySelector("[data-lista]");

export default function  crearCard(id, nombre, precio, imagen){
    const product = document.createElement("div");
    const imagenPredet = "./img/sin-imagen.jpg";
    const imagenValida = imagen || imagenPredet;

    product.className = "product__item";
    product.setAttribute('data-id', id);
    product.innerHTML = `
    
        <img 
        class="product__img"
        src="${imagenValida}"
        alt="${nombre}"
        />
        <div class="product__info">
            <span class="product__titulo">${nombre}</span>
        </div>
        <div class="product__precio__bloque">
        <span class="product__precio">$ ${precio}</span>
        <span class="product__delete"><i class="fas fa-trash-alt"></i></span>
        </div>
    
    `;
    
    return product;
};

async function listarProductos(){
    
    

    try{
        const listaAPI = await conexionAPI.listarProductos();
        if (listaAPI.length === 0) {
        lista.innerHTML = `<h2 class="mensaje__error__titulo">No hay productos para mostrar.</h2>`;
        return;
        }
        listaAPI.forEach(product =>lista.appendChild(crearCard(product.id, product.nombre, product.precio, product.imagen)));

    }catch{
        lista.innerHTML=`<h2 class="mensaje__error__titulo">Ha ocurrido un problema con la conexion</h2>`
    }
    
}

listarProductos();
initEliminarProductoListener();