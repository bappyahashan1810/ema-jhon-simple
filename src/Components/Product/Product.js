import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'


const Product = (props) => {


    return (
        <div className='product'>
            <img src={props.product.img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{props.product.name}</p>
                <p>Price: ${props.product.price}</p>
                <p><small>Seller: {props.product.seller}</small></p>
                <p><small>Ratings: {props.product.ratings} starts</small></p>
            </div>
            <button onClick={() => props.handleAddToCartClick(props.product)} className='btn-cart'>
                <p className='btn-text'>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    )
}

export default Product