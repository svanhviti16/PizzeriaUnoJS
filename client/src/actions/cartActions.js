import { ADD_TO_CART } from '../constants/cartConstants';


export function addToCart(product) {
    return {
        type: ADD_TO_CART,
        payload: product
    }
};
