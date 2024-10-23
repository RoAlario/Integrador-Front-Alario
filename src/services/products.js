//===PRODUCTOS===

import { productoActiva } from "../../main";
import { handleGetProductLocalStorage, setInLocalStorage } from "./persistence/localStorage";
import { closeModal } from "./views/modal";
import { handleGetProductToStore, handleRenderList } from "./views/store";
import Swal from "sweetalert2";



//GUARDAR O OMDIFICAR ELEMENTOS
const acceptButton = document.getElementById("acceptButton");
acceptButton.addEventListener("click", () => {
    handleSaveOrModifyElement();
});

//FUNCION DE GUARDAR
const handleSaveOrModifyElement = () => {
    const nombre = document.getElementById("nombre").value
    const imagen = document.getElementById("imagen").value
    const precio = document.getElementById("precio").value
    const categoria = document.getElementById("categoria").value;

    let object = null;

    if (productoActiva) {
        object = {
            ...productoActiva,
            nombre,
            imagen,
            precio,
            categoria,
        }
    } else {
        object = {
            id: new Date().toISOString(),
            nombre,
            imagen,
            precio,
            categoria,
        };
    }

    Swal.fire({
        title: "Correcto!",
        text: "Producto guardado correctamente!",
        icon: "success"
    });



    setInLocalStorage(object);
    handleGetProductToStore();
    closeModal();

};


//==ELIMINAR ELEMENTO==

export const handleDeleteProduct = () => {

    Swal.fire({
        title: "Desea eliminar el elemento?",
        text: "Si lo eliminas, será permanentemente!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar!"
    }).then((result) => {
        if (result.isConfirmed) {
            const products = handleGetProductLocalStorage();
            const result = products.filter((el) => el.id !== productoActiva.id);
            //setear el nuevo array
            localStorage.setItem("products", JSON.stringify(result));
            const newProducts = handleGetProductLocalStorage();
            handleRenderList(newProducts);
            closeModal();
        } else {
            closeModal();
        }
    });


}


