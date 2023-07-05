import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { PrizeoutOffer } from './offers-slice';
import type { RootState } from '../store';

type Redemption = {
    checkout_value_id: string;
    cost_in_cents: number;
    value_in_cents: number;
    display_bonus: string;
};

export interface SelectedOfferState {
    selectedOffer: PrizeoutOffer;
    selectedOfferButton: string;
    selectedOfferId: string;
    redemption: Redemption;
}

export const selectedOfferInitialState: SelectedOfferState = {
    redemption: {
        checkout_value_id: '',
        cost_in_cents: 0,
        display_bonus: '',
        value_in_cents: 0,
    },
    selectedOffer: {
        checkout_hero_url: '',
        currency_code: '',
        description: '',
        giftcard_list: [],
        image_url: '',
        is_enabled: false,
        logomark_url: '',
        name: '',
        stores: [],
        support_creative_list: [],
        tag: '',
    },
    selectedOfferButton: '',
    selectedOfferId: '',
};

export const selectedOfferSlice = createSlice({
    initialState: selectedOfferInitialState,
    name: 'selected-offer',
    reducers: {
        SelectedOffer(state, action: PayloadAction<PrizeoutOffer>) {
            state.selectedOffer = action.payload;
        },
        selectedOfferButton(state, action: PayloadAction<string>) {
            state.selectedOfferButton = action.payload;
        },
        selectedOfferId(state, action: PayloadAction<string>) {
            state.selectedOfferId = action.payload;
        },
        selectedRedemption(state, action: PayloadAction<Redemption>) {
            state.redemption = action.payload;
        },
    },
});

const selectedOfferStateSelector = (state: RootState) => state.selected;

export const selectedOfferSelector = createSelector(selectedOfferStateSelector, (selectedOfferState) => ({
    giftcard: selectedOfferState.selectedOffer.giftcard_list,
    imageUrl: selectedOfferState.selectedOffer.image_url,
    name: selectedOfferState.selectedOffer.name,
    offer: selectedOfferState.selectedOffer,
}));

export const redemptionSelector = createSelector(
    selectedOfferStateSelector,
    (selectedOfferState) => selectedOfferState.redemption,
);

const USDollar = new Intl.NumberFormat('en-US', {
    currency: 'USD',
    style: 'currency',
});

export const selectedRedemptionSelector = createSelector(selectedOfferStateSelector, (selectedOfferState) => ({
    bonus: selectedOfferState.redemption.display_bonus,
    checkoutId: selectedOfferState.redemption.checkout_value_id,
    cost: USDollar.format(selectedOfferState.redemption.cost_in_cents / 100),
    redemption: selectedOfferState.redemption,
    saving: USDollar.format(
        (selectedOfferState.redemption.value_in_cents - selectedOfferState?.redemption.cost_in_cents) / 100,
    ),
    value: USDollar.format(selectedOfferState.redemption.value_in_cents / 100),
}));

export const { SelectedOffer, selectedOfferId, selectedOfferButton, selectedRedemption } = selectedOfferSlice.actions;

const selectedOfferReducer = selectedOfferSlice.reducer;
export default selectedOfferReducer;
