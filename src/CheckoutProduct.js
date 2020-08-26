import React from 'react'
import './assets/css/CheckoutProduct.css'
import { useDispatch } from 'react-redux'
import {removeFromBasket} from './redux/action/action'

function CheckoutProduct(props) {
    const dispatch = useDispatch()

    const handleRemove =() => {
        dispatch(removeFromBasket(props.item))
    }
    
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={props.image} alt=""/>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{props.title}</p>
                <p className="checkoutProduct__price">
                    <small>Rs</small>
                    <strong>{props.price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    { Array(props.rating)
                            .fill().map((_) =>
                                <p>	&#10032;</p>)
                   }
                </div>
                <button onClick={handleRemove}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
