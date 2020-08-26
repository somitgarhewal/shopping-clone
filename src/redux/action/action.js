import {ADD_TO_BASKET, REMOVE_FROM_BASKET} from '../Type'

export const addToBasket = (data) => ({
   
                type: ADD_TO_BASKET,
                payload: data
            
        
})
export const removeFromBasket = (data) => ({
   
    type: REMOVE_FROM_BASKET,
    payload: data


})