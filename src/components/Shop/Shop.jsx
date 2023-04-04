import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        let savedCart = [];
        const storedCart = getShoppingCart();
        for (const id in storedCart) {
            const savedProduct = products.find(product => product.id === id);
            if (savedProduct) {
                const quantity = storedCart[id];
                savedProduct.quantity = quantity;
                savedCart.push(savedProduct);
            }
            setCart(savedCart);
        }
    }, [products])

    const handleAddToCart = (product) => {
        let newCart = [];
        // const newCart = [...cart, product];

        const exists = cart.find(pd => pd.id === product.id);
        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        else {
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, product];
        }
        setCart(newCart);
        addToDb(product.id);
    }

    const handleRemoveCart = () =>{
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products?.map(product => <Product key={product.id} handleAddToCart={handleAddToCart} product={product}></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart} handleRemoveCart={handleRemoveCart}>
                    <Link className='btn-review-link' to="/orders">
                        <button className='btn-review-order'>
                            Review Order
                        </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;