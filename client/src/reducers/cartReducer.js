import { ADD_TO_CART } from '../constants/cartConstants';


// viljum að initial state sé array
const cartReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_CART: return action.payload; // <-- þetta er listinn með vörunum
        default: return state;

    }

}

export default cartReducer;