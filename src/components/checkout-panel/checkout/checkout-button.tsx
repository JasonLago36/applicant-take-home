import React from 'react';
import { Button } from '../../common';
import { performCheckout } from '../actions/actions';
import { useAppSelector } from '../../../hooks';
import { useDispatch } from 'react-redux';
import { selectedOfferSelector } from '../../../slices/chosen-offer-slice';

const CheckoutButton: React.FC = (): React.ReactElement => {
    const buttonText = 'Prizeout Gift Card';
    const { name } = useAppSelector(selectedOfferSelector);

    const checkout_value_id = useAppSelector((state) => state.selected.redemption.checkout_value_id);
    const cost_in_cents = useAppSelector((state) => state.selected.redemption.cost_in_cents);
    const value_in_cents = useAppSelector((state) => state.selected.redemption.value_in_cents);

    const dispatch = useDispatch();

    const buttonHandler = () => {
        //Checkout logic here
        dispatch(
            performCheckout({
                checkout_value_id,
                cost_in_cents,
                name,
                value_in_cents,
            }),
        );
    };

    return (
        <>
            <Button
                ariaLabel="Prizeout your gift card"
                color={`primary`}
                onClick={buttonHandler}
                size="medium"
                text={buttonText}
                type="submit"
            />
        </>
    );
};

export default CheckoutButton;
