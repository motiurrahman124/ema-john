import React from 'react';
import './ReviewItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ReviewItem = ({cart, handleRemoveFormItem}) => {
    const {id, img, name, price, shipping} = cart;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-details'>
                <p className='product-name'>{name}</p>
                <p>Price: <span className='text-orange'>${price}</span></p>
                <p>Shipping Charge: <span className='text-orange'>{shipping}</span></p>
            </div>
            <button onClick={()=>handleRemoveFormItem(id)} className='btn-delete'><FontAwesomeIcon className='delete-icon' icon={faTrashAlt} /></button>
        </div>
    );
};

export default ReviewItem;