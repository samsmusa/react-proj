import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Products.css'

const Products = ({product, addToCart}) => {
    const {name , img, id, price, category, seller} = product
    return (
        <div className='product-card'>
            <img src={img} alt=""/>
            <div className='product-info'>
                <p className="head"><span>{name}({category})</span></p>
                <p className="head"><span>Seller:</span> {seller}</p>
                <p className="head"><span>ISBN:</span> {id}</p>
                <p className="head"><span>price:</span> ${price}</p>

            </div>
            <button onClick={() => addToCart(product)} className='add-cart align-items-center'>
                <p className='btn-text mx-3 my-3'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Products;