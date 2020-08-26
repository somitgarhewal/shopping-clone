import { ADD_TO_BASKET } from '../Type'

const initialState = {
    basket: [],
}

function reducer(state = initialState, action) {
    debugger
    switch (action.type) {
        case 'ADD_TO_BASKET':
            const basketRef = [...state.basket]
            basketRef.push(action.payload)
            return {
                ...state,
                basket: basketRef
            }
        case 'REMOVE_FROM_BASKET':
            break;

        default:
            return state;
    }
}

export default reducer