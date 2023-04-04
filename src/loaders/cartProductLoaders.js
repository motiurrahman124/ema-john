import { getShoppingCart } from "../../utilities/fakedb";

const cartProductLoaders = async() =>{
    const loadedProducts = await fetch('products.json');
    const products = await loadedProducts.json();
    let savedCart = [];
        const storedCart = getShoppingCart();
        for (const id in storedCart) {
            const savedProduct = products.find(product => product.id === id);
            if (savedProduct) {
                const quantity = storedCart[id];
                savedProduct.quantity = quantity;
                savedCart.push(savedProduct);
            }
        }
    return savedCart;
}

export default cartProductLoaders;