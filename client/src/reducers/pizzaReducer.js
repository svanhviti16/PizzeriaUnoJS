import { GET_ALL_PIZZAS } from '../constants/pizzaConstants';

// viljum að initial state sé array
const pizzaReducer = (state = [], action) => {
    switch (action.type) {
        case GET_ALL_PIZZAS: return action.payload; // <-- þetta er listinn með pizzunum
        default: return state;
    }

}

export default pizzaReducer;