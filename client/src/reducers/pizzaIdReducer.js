import { GET_PIZZA_BY_ID } from '../constants/pizzaConstants';

// viljum að initial state sé array
const pizzaIdReducer = (state = {}, action) => {
    console.log(action);
    switch (action.type) {
        case GET_PIZZA_BY_ID: return action.payload; // <-- hér á að vera ein pizza
        
        default: return state;

    }

}

export default pizzaIdReducer;