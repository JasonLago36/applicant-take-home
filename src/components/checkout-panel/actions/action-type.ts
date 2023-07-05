export const CHECKOUT_REQUEST = 'CHECKOUT_REQUEST';
export const CHECKOUT_POST_SUCCESS = 'CHECKOUT_POST_SUCCESS';
export const CHECKOUT_POST_FAILURE = 'CHECKOUT_POST_FAILURE';

interface checkoutRequestAction {
    type: typeof CHECKOUT_REQUEST;
}

interface checkoutPostSuccessAction {
    payload: string;
    type: typeof CHECKOUT_POST_SUCCESS;
}

interface checkoutPostFailureAction {
    error: string;
    type: typeof CHECKOUT_POST_FAILURE;
}

export type CheckoutActionTypes = checkoutRequestAction | checkoutPostSuccessAction | checkoutPostFailureAction;
