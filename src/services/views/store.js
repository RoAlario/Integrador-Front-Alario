//======STORE======

import { setProductoActiva } from "../../../main";
import { handleGetProductLocalStorage } from "../persistence/localStorage";
import { openModal } from "./modal";



export const handleGetProductToStore = () => {
    const products = handleGetProductLocalStorage();
    handleRenderList(products);
}


export const handleRenderList = (productosIn) => {
    const burgers = productosIn.filter((el) => el.categoria === "Hamburguesas");
    const papas = productosIn.filter((el) => el.categoria === "Papas")
    const gaseosas = productosIn.filter((el) => el.categoria === "Gaseosas")

    const RenderProductGroup = (productos, title) => {
        console.log(productos);
        if (productos.length > 0) {
            const productosHTML = productos.map((producto, index) => {
                return `<div
    class='containerTargetItem'
    id='product-${producto.categoria}-${index}'>
    <div>
        <img src='${producto.imagen}' />
        <div>
            <h2>${producto.nombre}</h2>
            <div>
                <div  class = 'targetProps'>
                    <p><b>Precio: </b> $ ${producto.precio}</p>
                </div>
            </div>
        </div>
    </div>
</div>`;
            });


            return `
            <section class= 'sectionStore'>
                
                <div class='containerTitleSection'> <h3>${title}</h3></div>
                <div 
                class = 'containerProductStore'>${productosHTML.join("")} </div>
            </section>`;
        } else {
            return "";
        }
    };

    //renderizar los productos dentro de su categoria
    const appContainer = document.getElementById("storeContainer");
    appContainer.innerHTML = `
    ${RenderProductGroup(burgers, "Hamburguesa")}
    ${RenderProductGroup(papas, "Papas")}
    ${RenderProductGroup(gaseosas, "Gaseosas")}
    `;

    const addEvents = (productsIn) => {
        console.log(productosIn);
        if (productosIn) {
            productsIn.forEach((element, index) => {
                const productContainer = document.getElementById(
                    `product-${element.categoria}-${index}`
                );
                productContainer.addEventListener("click", () => {
                    setProductoActiva(element);
                    openModal();
                });
            });
        }
    };
    addEvents(burgers);
    addEvents(papas);
    addEvents(gaseosas);

};



