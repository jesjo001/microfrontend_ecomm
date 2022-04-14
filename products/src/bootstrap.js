import faker from 'faker';

const mount = (el) => {
    let products = '';

    for(let i=0; i < 5; i++){
        const name = faker.commerce.productName();
        products += `<div>${name}</div>`;
    }
    
    el.innerHTML = products

}
// CASE 1
// THIS IS WHEN WE ARE WORKING LOCALLY ON PRODUCT
if(process.env.NODE_ENV === 'development'){
    const el = document.querySelector('#dev-products')

    //Assuming our container doest have an 
    //element with 'dev-products
    if(el){
        mount(el);
    }
}

// CASE 2
// WE ARE RUNNING THE IN THROUGH THE CONTAINER APP OR IN PRODUCTION  
export { mount };