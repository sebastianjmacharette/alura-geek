import { conexionAPI } from './conexionAPI.js';

export default async function eliminarProducto(event) {
    if (event.target.closest('.product__delete')) {
        
        const productItem = event.target.closest('.product__item');
        const productId = productItem.getAttribute('data-id');

        try {
            await conexionAPI.eliminarProducto(productId);
            productItem.remove();
        } catch (error) {
            console.error("Error al eliminar el producto:", error);
        }
    }
}

export function initEliminarProductoListener() {
    const listaProductos = document.querySelector("[data-lista]");
    listaProductos.addEventListener("click", eliminarProducto);
}


