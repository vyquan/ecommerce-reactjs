import ProductAPI from "../api/productAPI";

const addToCart ={
    async render(productId){
         let cart = localStorage.getItem('cart')
         cart = cart == null ? [] : JSON.parse(cart);
         const {data:product} = await  ProductAPI.get(productId) ;
        let existed  = cart.map(e =>  e._id).indexOf(product._id)
        // console.log(existed);
        if(existed == -1){
            product.quantity = 1
            cart.push(product)
            localStorage.setItem('cart',JSON.stringify(cart))
        }else{
            cart[existed].quantity +=1
            localStorage.setItem('cart',JSON.stringify(cart))
        }
        await this.updateToCartDisplay();
    },
    async updateToCartDisplay(){
            let cart = localStorage.getItem('cart');
            cart = cart == null ? [] : JSON.parse(cart);
            let toTalCart = 0
            if(cart.length > 0){
                // cart.forEach(element=>{
                //     toTalCart += element.quantity
                // }) ;
                toTalCart=cart.length
            }else{
                console.log("Empty cart");
            }
            document.querySelector('.total-cart-product').innerHTML = toTalCart
    }

}
export  default addToCart;