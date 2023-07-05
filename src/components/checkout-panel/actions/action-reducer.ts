import { CHECKOUT_REQUEST, CHECKOUT_POST_SUCCESS, CHECKOUT_POST_FAILURE, CheckoutActionTypes } from './action-type';

interface CheckoutState {
    error: string | null;
    loading: boolean;
}

const initialState: CheckoutState = {
    error: null,
    loading: false,
};

const checkoutReducer = (state = initialState, action: CheckoutActionTypes): CheckoutState => {
    switch (action.type) {
        case CHECKOUT_REQUEST:
            return {
                ...state,
                error: null,
                loading: true,
            };
        case CHECKOUT_POST_SUCCESS:
            return {
                ...state,
                error: null,
                loading: false,
            };
        case CHECKOUT_POST_FAILURE:
            return {
                ...state,
                error: action.error,
                loading: false,
            };
        default:
            return state;
    }
};

export default checkoutReducer;
