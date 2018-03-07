import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import pizza from './pizzaReducer';
import order from './orderReducer';
import offer from './offerReducer';
import pizzaId from './pizzaIdReducer';
import cartList from './cartReducer';

export default combineReducers({ pizza, order, offer, pizzaId, cartList, form : formReducer});

