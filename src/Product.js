import React from 'react'
import './assets/css/Product.css'
import { addToBasket } from './redux/action/action'
import { useDispatch } from 'react-redux'

function Product({ id, title, image, price, rating }) {
    const dispatch = useDispatch()

    const handleAdd = () => {
        const data = { id, title, image, price, rating }
       
        dispatch(addToBasket(data))
    }
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
            <button type='button' onClick={handleAdd}>Add to cart</button>
        </div>
    )
}

export default Product
