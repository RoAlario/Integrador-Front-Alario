//===CATEGORIA===

import { categoriaActiva } from "../../main";
import { handleGetProductLocalStorage } from "./persistence/localStorage";
import { handleRenderList } from "./views/store";


const handleFilterProductsByCategory = (categoryIn) => {
    const products = handleGetProductLocalStorage();

    switch (categoryIn) {
        case categoriaActiva:
            handleRenderList(products);
            break;
        case "Todo":
            handleRenderList(products);
            break;
        case "Hamburguesas":
        case "Papas":
        case "Gaseosas":
            const result = products.filter((el) => el.categoria === categoryIn)
            handleRenderList(result);
        default:
            break;

            case "mayorPrecio":
            const resultPrecioMay = products.sort((a,b) =>b.precio - a.precio) 
            handleRenderList(resultPrecioMay);
            break;


            case "menorPrecio":
                const resultPrecioMen = products.sort((a,b) =>a.precio - b.precio) 
                handleRenderList(resultPrecioMen);
                break;

    }

}



//render de la vista categorias 
export const renderCategories = () => {
    const ulList = document.getElementById("listFilter");
    //Crear elementos dentro de la lista
    ulList.innerHTML = `
    <li id  = "Todo"> Todo los productos<li>
    <li id  = "Hamburguesas"> Hamburguesas<li>
    <li id  = "Papas"> Papas<li>
    <li id  = "Gaseosas"> Gaseosas<li>
    <li id  = "mayorPrecio"> Mayor precio <li>
    <li id  = "menorPrecio"> Menor precio<li>
`;

    //añado el evento clisk
    const liElements = ulList.querySelectorAll("li");
    liElements.forEach((liElement) => {
        liElement.addEventListener(`click`, () => {
            handleClick(liElement);
        })
    })

    //verificamos y manejamos el estilo del elemento activo
    const handleClick = (elemento) => {
        handleFilterProductsByCategory(elemento.id);
        liElements.forEach((el) => {
            if (el.classList.contains('liActive')) {
                el.classList.remove('liActive')
            } else {
                if (elemento === el) {
                    el.classList.add('liActive')
                }
            }
        })
    }
};


