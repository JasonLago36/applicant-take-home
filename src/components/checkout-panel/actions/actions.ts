import axios from 'axios';
import { CHECKOUT_REQUEST, CHECKOUT_POST_SUCCESS, CHECKOUT_POST_FAILURE, CheckoutActionTypes } from './action-type';
import { createAsyncThunk } from '@reduxjs/toolkit';

interface PrizeoutCheckoutOffer {
    checkout_value_id: string;
    cost_in_cents: number;
    value_in_cents: number;
    name: string;
}

export const checkoutRequest = (): CheckoutActionTypes => ({
    type: CHECKOUT_REQUEST,
});

export const checkoutSuccess = (data: string): CheckoutActionTypes => ({
    payload: data,
    type: CHECKOUT_POST_SUCCESS,
});

export const checkoutFailure = (error: string): CheckoutActionTypes => ({
    error,
    type: CHECKOUT_POST_FAILURE,
});

export const performCheckout = createAsyncThunk(
    'type/postData',
    async (checkoutOffer: PrizeoutCheckoutOffer, { dispatch }) => {
        dispatch(checkoutRequest());

        try {
            const requestData = {
                checkout_value_id: checkoutOffer.checkout_value_id,
                cost_in_cents: checkoutOffer.cost_in_cents,
                name: checkoutOffer.name,
                value_in_cents: checkoutOffer.value_in_cents,
            };
            console.log('check out was successful!', requestData);
            const response = await axios.post('/api/checkout', requestData);
            dispatch(checkoutSuccess(response.data));
        } catch (error) {
            dispatch(checkoutFailure(error.message));
            throw new Error(error.message);
        }
    },
);
