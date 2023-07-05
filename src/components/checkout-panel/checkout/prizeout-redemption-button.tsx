import React from 'react';
import ClassNames from 'classnames';
import './prizeout-redemption-button.less';
import { useAppSelector } from '../../../hooks';
import { useDispatch } from 'react-redux';
import { selectedOfferButton, selectedRedemptionSelector } from '../../../slices/chosen-offer-slice';
import PropTypes from 'prop-types';

interface PrizeOutSelectedRedemptionButtonProps {
    id?: string;
    amount?: string;
    onClick?: () => void;
}
export const PrizeOutSelectedRedemptionButton: React.FC<PrizeOutSelectedRedemptionButtonProps> = ({
    id,
    amount,
}): React.ReactElement => {
    const buttonId = id;
    const dispatch = useDispatch();
    const prizeoutRedemptionAmount = amount;
    const { checkoutId } = useAppSelector(selectedRedemptionSelector);
    const classes: string = ClassNames('prizeout-redemption-button', {
        'prizeout-redemption-button__not-selected': checkoutId !== buttonId,
        'prizeout-redemption-button__selected': checkoutId === buttonId,
    });

    return (
        <div role="button" onClick={() => dispatch(selectedOfferButton(checkoutId))} className={classes}>
            {prizeoutRedemptionAmount}
        </div>
    );
};

PrizeOutSelectedRedemptionButton.propTypes = {
    amount: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};

export default PrizeOutSelectedRedemptionButton;
