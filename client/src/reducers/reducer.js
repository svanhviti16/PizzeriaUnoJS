import { combineReducers } from 'redux';
import pizza from './pizzaReducer';
import order from './orderReducer';
import offer from './offerReducer';
import pizzaId from './pizzaIdReducer';

export default combineReducers({ pizza, order, offer, pizzaId });

