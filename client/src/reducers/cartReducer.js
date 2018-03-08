import { ADD_TO_CART } from '../constants/cartConstants';

// viljum að initial state sé array
const cartReducer = (state = {cart: []}, action) => {
    switch (action.type) {
        case ADD_TO_CART: return {cart: [...state.cart, action.payload]}; // <-- þetta er listinn með vörunum
        default: return state;

    }

}

export default cartReducer;