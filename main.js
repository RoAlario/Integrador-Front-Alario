import { renderCategories } from "./src/services/categories.js";
import { handleSearchProductoByName } from "./src/services/searchBar.js";
import { openModal } from "./src/services/views/modal.js";
import { handleGetProductToStore } from "./src/services/views/store.js";
import './style.css'

//==APLICACION==
export let categoriaActiva = null;
export const setCategoriaActiva = (categoriaIn) => {
    categoriaActiva = categoriaIn;
};

export let productoActiva = null;
export const setProductoActiva = (productoIn) => {
    productoActiva = productoIn;

};


handleGetProductToStore();
renderCategories();



//==HEADER==
const buttonAdd = document.getElementById("buttonAdd");
buttonAdd.addEventListener("click", () => {
    openModal();
});


//BUTTON SEARCH

const buttonSearch = document.getElementById('buttonSearch');
buttonSearch.addEventListener("click", () => {
    handleSearchProductoByName()
});




