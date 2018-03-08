import { GET_ORDER_BY_TELEPHONE, POST_ORDER } from '../constants/orderConstants';
 
const orderReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_ORDER_BY_TELEPHONE: return state;
        case POST_ORDER: return state;
        default: return state;
    }
}

export default orderReducer;