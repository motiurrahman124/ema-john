import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css';
import { deleteShoppingCart, removeFromDb } from '../../../utilities/fakedb';

const Orders = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);

    const handleRemoveFormItem = (id) =>{
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

    const handleRemoveCart = () =>{
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div>
            <div className='shop-container'>
                <div className='review-container'>
                    {
                        cart.map(product => <ReviewItem key={product.id} cart={product} handleRemoveFormItem={handleRemoveFormItem}></ReviewItem>)
                    }
                </div>
                <div className='cart-container'>
                    <Cart cart={cart} handleRemoveCart={handleRemoveCart}>
                        <Link className='btn-review-link' to="/checkout">
                            <button className='btn-review-order'>
                                Proceed Checkout
                            </button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Orders;