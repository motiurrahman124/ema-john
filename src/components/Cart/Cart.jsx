import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Cart = ({ cart, handleRemoveCart, children }) => {

    let total = 0;
    let totalShipping = 0;
    let quantity = 0;

    for (const product of cart) {
        // if (product.quantity === 0) {
        //     product.quantity =1;
        // }
        // product.quantity = product.quantity || 1;

        total = total + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping * product.quantity;
        quantity = quantity + product.quantity;
    }

    const tax = total * 7 / 100;
    const grandTotal = total + totalShipping + tax;

    return (
        <div className='cart'>
            <h4>Order Summery</h4>
            <p>Selected item : {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h2>Grand Total: ${grandTotal.toFixed(2)}</h2>
            <button onClick={handleRemoveCart} className='btn-clear-cart'>Clear Cart <FontAwesomeIcon icon={faTrashAlt} /></button>
            {children}
        </div>
    );
};

export default Cart;