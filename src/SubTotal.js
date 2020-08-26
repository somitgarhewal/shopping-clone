import React from 'react'
import './assets/css/SubTotal.css'
import CurrencyFormat from 'react-currency-format'
import { useSelector } from 'react-redux'

function SubTotal() {

const basket = useSelector(state => state.basket)
const getBasketTotal = (basket) => {
    return basket?.reduce((amount, item) => item.price + amount, 0)
} 
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value)=>(
                    <>
                    <p>
                SubTotal ({basket.length} items):<strong>{` ${value}`}</strong>
                    </p>
                    <small className="subtotal__gift">
                        <input type="checkbox"/>this order contains a gift
                    </small>
                </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"Rs"}
            />
           <button>
                Proceed To Checkout
           </button>
        </div>
    )
}

export default SubTotal
