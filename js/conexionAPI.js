async function listarProductos(){
    const conexion = await fetch("http://localhost:3001/products");
    const conexionConvertida = conexion.json();
    return conexionConvertida;
}

async function enviarProducto(nombre, precio, imagen){
    const conexion = await fetch("http://localhost:3001/products", {
        method:"POST",
        headers:{"Content-type":"application/json"},
        body: JSON.stringify({
            nombre:nombre,
            precio:precio,
            imagen:imagen
        })
    })
    const conexionConvertida = conexion.json();

    if(!conexion.ok){
        throw new Error("Ha ocurrido un error al enviar el producto.");
    }

    return conexionConvertida;
}

async function eliminarProducto(id) {
    const conexion = await fetch(`http://localhost:3001/products/${id}`, {
        method: "DELETE",
    });

    if (!conexion.ok) {
        throw new Error("Ha ocurrido un error al eliminar el producto.");
    }
}

export const conexionAPI = {
    listarProductos,
    enviarProducto,
    eliminarProducto
};


