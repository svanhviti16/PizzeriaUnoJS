import { GET_ALL_PIZZAS } from '../constants/pizzaConstants';
import fetch from 'isomorphic-fetch';

export const getAllPizzas = () => {
    return dispatch => fetch('http://localhost:3500/api/pizzas').then(json => json.json()).then(data => dispatch(getAllPizzasSuccess(data)));
};

const getAllPizzasSuccess = (pizzas) => {
    return {
        type: GET_ALL_PIZZAS,
        payload: pizzas
    };
};