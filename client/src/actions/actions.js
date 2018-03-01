import { DISPLAY_TEST_STRING } from '../constants/constants'

export const userInfo = (name, telephone) => {
    return {
        type: DISPLAY_TEST_STRING,
        payload: { user: { name, telephone } }
    };
};