//=======LOCALSTORAGE=======

export const handleGetProductLocalStorage = () => {
    const products = JSON.parse(localStorage.getItem("products"));
    if (products) {
        return products;
    } else {
        return [];
    }
};

//GUARDAR EN LOCALSTORAGE

//recibir el producto
export const setInLocalStorage = (productIn) => {

if(productIn){
    //traemos los elementos
    let productsInLocal = handleGetProductLocalStorage();
    const existingIndex = productsInLocal.findIndex((productsLocal) =>
        productsLocal.id === productIn.id
);

    //verificar si el elemento existe
    if (existingIndex !== -1) {
        //si existe lo reemplazamos 
        productsInLocal[existingIndex] = productIn;
    } else {
        //si no existe lo agregamos
        productsInLocal.push(productIn);
    }
    //setear el nuevo array
    localStorage.setItem("products", JSON.stringify(productsInLocal));
}
}