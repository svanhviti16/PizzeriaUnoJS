import { combineReducers } from 'redux';
import pizza from './pizzaReducer';
import order from './orderReducer';

export default combineReducers({ pizza, order });


/*import { DISPLAY_TEST_STRING } from '../constants/constants'

const initialState = {
    user: {}
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case DISPLAY_TEST_STRING: 
            const { name, telephone } = action.payload;
            return Object.assign({ user: { name, telephone } });
        default: return state;
    }
}

export default reducer;*/