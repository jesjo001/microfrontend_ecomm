import faker from 'faker';


const mount = (el) => {
    const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`;
    el.innerHTML = cartText;
    
}

if(process.env.NODE_ENV === 'development'){
    const el = document.querySelector('#cart-dev')

    //Assuming our container doest have an 
    //element with 'dev-products
    if(el){
        mount(el);
    }
}

// CASE 2
// WE ARE RUNNING THE IN THROUGH THE CONTAINER APP OR IN PRODUCTION  
export { mount };