import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { img, name, seller, price, ratings } = props.product;

    const handleAddToCart = props.handleAddToCart;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h2 className='product-name'>{name}</h2>
                <p className='product-price'>Price : ${price}</p>
                <div className='product-details'>
                    <p>Manufacturer : {seller}</p>
                    <p>Rating : {ratings} stars</p>
                </div>
            </div>
            <button onClick={handleAddToCart} className='btn-cart'>Add to Cart <FontAwesomeIcon icon={faCartShopping} /></button>
        </div>
    );
};

export default Product;