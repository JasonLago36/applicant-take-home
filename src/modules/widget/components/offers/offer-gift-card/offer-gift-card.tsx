import React from 'react';
import Classnames from 'classnames';
import { GiftCard, BonusTag } from '../../../../../components/common/';
import { PrizeoutOffer } from '../../../../../slices/offers-slice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../../store';
import { SelectedOffer, selectedOfferId } from '../../../../../slices/chosen-offer-slice';
import { useAppSelector } from '../../../../../hooks';
import './offer-gift-card.less';

interface OfferGiftCardProps {
    offer: PrizeoutOffer;
    onClickHandler: () => void;
}

export const OfferGiftCard: React.FC<OfferGiftCardProps> = ({ offer, onClickHandler }): React.ReactElement => {
    const offerId = useAppSelector((state) => state.selected.selectedOfferId);
    const activeOfferId = offerId;
    const firstGiftCard = offer.giftcard_list[0];
    const offerType = firstGiftCard.display_monetary_bonus ? 'monetary' : 'percentage';
    const offerValue = firstGiftCard.display_bonus;
    const classes: string = Classnames('offer-gift-card', {
        'offer-gift-card--selected': activeOfferId === firstGiftCard.checkout_value_id,
    });

    const selectOfferOnEnter = (event: React.KeyboardEvent<HTMLElement>) => {
        if (event.key === 'Enter') {
            onClickHandler();
        }
    };
    const dispatch = useDispatch<AppDispatch>();
    const selectOffer = () => {
        const selectedOffer = firstGiftCard;
        dispatch(SelectedOffer(offer));
        dispatch(selectedOfferId(selectedOffer.checkout_value_id));
    };

    return (
        <div
            className={classes}
            onClick={() => {
                onClickHandler(), selectOffer();
            }}
            onKeyDown={(event) => selectOfferOnEnter(event)}
            role="button"
            tabIndex={0}
        >
            <GiftCard name={offer.name} imgUrl={offer.image_url} altText={offer.name} className="offer" />
            {offerValue > 0 && <BonusTag type={offerType} value={offerValue} size="small" />}
        </div>
    );
};
