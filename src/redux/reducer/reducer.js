
const initialState = {
    basket: [],
    user: null
}

function reducer(state = initialState, action) {
   
    switch (action.type) {
        case 'SET_USER' :
            return{
                ...state,
                user: action.payload
            }
        case 'ADD_TO_BASKET':
            const basketRef = [...state.basket]
            basketRef.push(action.payload)
            return {
                ...state,
                basket: basketRef
            }
        case 'REMOVE_FROM_BASKET':
            const deleteItemRef = [...state.basket]
            return {
              ...state,
              basket: deleteItemRef.filter(item => item.id !== action.payload)
            }

        default:
            return state;
    }
}

export default reducer