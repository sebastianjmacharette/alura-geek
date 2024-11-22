const formulario = document.querySelector("[data-formulario]");
const limpiar = document.getElementById('limpiar');

function limpiarCampos() {
    const campos = document.querySelectorAll('.campo__escrita');

    // Itera sobre cada campo y limpia su valor
    campos.forEach(function (input) {
        input.value = '';
    });
}

limpiar.addEventListener('click', limpiarCampos);

