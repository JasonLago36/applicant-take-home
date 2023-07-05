import React from 'react';
import { useAppSelector } from '../../../hooks';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../store';
import { selectedRedemption, selectedOfferSelector } from '../../../slices/chosen-offer-slice';
import './selected-gift-card.less';
import PrizeOutSelectedRedemptionButton from './prizeout-redemption-button';
import PrizeOutRewardsCalculator from './prizeout-rewards-calculator-container';

const selectedGiftCard: React.FC = (): React.ReactElement => {
    const { offer, giftcard } = useAppSelector(selectedOfferSelector);
    const dispatch = useDispatch<AppDispatch>();
    const USDollar = new Intl.NumberFormat('en-US', {
        currency: 'USD',
        style: 'currency',
    });

    const handleRedemptionAmount = (offerItem: any) => {
        dispatch(selectedRedemption(offerItem));
    };

    const returnOfferCost = () => {
        if (giftcard) {
            return giftcard.map((offerItem) => (
                <div
                    tabIndex={0}
                    role="button"
                    onClick={() => handleRedemptionAmount(offerItem)}
                    key={offerItem.checkout_value_id}
                >
                    <PrizeOutSelectedRedemptionButton
                        id={offerItem.checkout_value_id}
                        amount={USDollar.format(offerItem.cost_in_cents / 100)}
                    />
                </div>
            ));
        }
    };

    return (
        <div className="checkout--card">
            <h1>{offer.name}</h1>
            {offer.name && <p>Select Redemption Amount </p>}
            {offer && <div className="checkout--card__cost-container">{returnOfferCost()}</div>}
            <PrizeOutRewardsCalculator />
        </div>
    );
};

export default selectedGiftCard;
