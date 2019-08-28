import { createReducer } from '~/utils/redux-utils'
import LoginActions from '~/constants/auth';

const initialState = {
    isLoading: true,
    error: false,
    errorMsg: null,
    data: null,
};

const reducers = {
    [LoginActions.LOGIN] : (state, action) => {
        return state;
    },
    [LoginActions.LOGIN_SUCCESS]: (state, action) => {
        return state;
    },
    [LoginActions.LOGIN_ERROR]: (state, action) => {
        return state;
    }
};

export default createReducer(initialState, reducers);