import React from 'react'
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
            <button className='btn-cart'>
                <p>Add To Cart</p>
            </button>
        </div>
    )
}

export default Product