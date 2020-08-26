
const initialState = {
    basket: [],
}

function reducer(state = initialState, action) {
   
    switch (action.type) {
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