import React from 'react'
import { useSelector } from 'react-redux'
import './assets/css/Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import SubTotal from './SubTotal'

function Checkout() {
    const basket = useSelector(state => state.basket)
    return (
        <div className="checkout">
            <div className="checkout__left">
            <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" />
            {basket?.length === 0 ?(
                <div>
                    <h2>Your Shopping basket is empty</h2>
                </div>
            ):(
                <div>
                    <h2 className="checkout__title">Your shopping basket</h2>
                    {basket.map(item =>
                      <CheckoutProduct
                      item= {item.id}
                      title={item.title}
                      image = {item.image}
                      price = {item.price}
                      rating = {item.rating}
                      />
                     )}
                   
                </div>
            )}
            </div>
            {basket.length > 0 &&(
                <div className="checkout__right">
                    <SubTotal/>
                    </div>
            )}
        </div>
        
    )
}

export default Checkout
