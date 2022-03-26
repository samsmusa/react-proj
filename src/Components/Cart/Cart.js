import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackspace } from '@fortawesome/free-solid-svg-icons';
import'./Cart.css'

const Cart = ({cart, removeCart, randomSelect, removeItemCart}) => {
    
    return (
        <div className='cart'>
            <div className='cart-head fs-6'>Shopping-cart</div>
            <div className='cart-product'>
            {
                cart.map(product => <div key={product.id} className='product-div'>
                    <img src={product.img} alt=""/> 
                    <p className='fs-6 fw-bold'>{product.name}</p>
                    <button onClick={()=>removeItemCart(product)}>
                <FontAwesomeIcon icon={faBackspace}></FontAwesomeIcon></button>
                    </div>)
            }
            </div>
            <div >
                <button className='cart-btn fs-6' onClick={randomSelect} data-bs-toggle="modal" data-bs-target="#exampleModal">Select Random One</button>
                <button className='cart-btn fs-6' onClick={removeCart}>Refresh Cart</button>
            </div>
            
        </div>
        
    );
};

export default Cart;