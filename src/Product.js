import React from 'react'
import './Product.css'

function Product({ id, title, image, price, rating }) {

    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>Rs.</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating)
                            .fill().map((_) =>
                                <p>	&#10032;</p>)
                    }
                </div>
            </div>
            <img src={image} />
            <button>Add to cart</button>
        </div>
    )
}

export default Product
