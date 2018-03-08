import { POST_ORDER } from '../constants/orderConstants';
import fetch from 'isomorphic-fetch';

export const postOrder = (order, telephone) => {
    return dispatch => fetch('http://localhost:3500/api/orders/'+telephone, 
        {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify(order),
        })
        .then(json => console.log(json))
        .then(data => dispatch(postOrderSuccess(data)));
};
export function postOrderSuccess(order) {
    return {
        type: POST_ORDER,
        payload: order
    }
};
