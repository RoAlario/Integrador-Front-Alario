/*===POP UP===*/

import { productoActiva, setProductoActiva } from "../../../main";
import { handleDeleteProduct } from "../products";

const buttonCancel = document.getElementById("cancelButton");
buttonCancel.addEventListener("click", () => {
    closeModal();
});




//FUNCIONES ABRIR CERRAR MODAL
export const openModal = () => {
    const modal = document.getElementById("modalPopUp");
    modal.style.display = "flex";
    const buttonDelate = document.getElementById("delateButton")
    if (productoActiva) {
        buttonDelate.style.display = "block";

    } else {
        buttonDelate.style.display = "none";

    }

    if (productoActiva) {
        const nombre = document.getElementById("nombre")
        const imagen = document.getElementById("imagen")
        const precio = document.getElementById("precio")
        const categoria = document.getElementById("categoria");
        nombre.value = productoActiva.nombre;
        imagen.value = productoActiva.imagen;
        precio.value = productoActiva.precio;
        categoria.value = productoActiva.categoria;
    }



};


export const closeModal = () => {
    const modal = document.getElementById("modalPopUp");
    modal.style.display = "none";
    setProductoActiva(null);
    resetModal();
};


const resetModal = () => {
    const nombre = document.getElementById("nombre")
    const imagen = document.getElementById("imagen")
    const precio = document.getElementById("precio")
    const categoria = document.getElementById("categoria");
    nombre.value = "";
    imagen.value = "";
    precio.value = "0";
    categoria.value = "Seleccione una categoria";

};


const delateButton = document.getElementById("delateButton");

delateButton.addEventListener('click', () => {

    handleButtonDelate();

});

const handleButtonDelate = () => {
    handleDeleteProduct();
}



