import React from 'react';
import checkoutPanelViewWrapper from '../view-wrapper';
import CheckoutButton from './checkout-button';
import './checkout.less';
import SelectedGiftCard from './selected-gift-card';
import { useAppSelector } from '../../../hooks';

const CheckoutPanelView: React.FC = (): React.ReactElement => {
    const giftCardImage = useAppSelector((state) => state.selected.selectedOffer.image_url);
    return (
        <section className="checkout">
            <div className="grid grid--top-bottom grid--stretch-top">
                <div className="grid__item">
                    <section className="checkout__brand">
                        <img className="checkout__image" alt="Prize out redemable gift card" src={giftCardImage} />
                        <p className="checkout__name"></p>
                    </section>
                </div>
                <div className="grid__item">
                    <section className="checkout__calculation">
                        <SelectedGiftCard />
                        <CheckoutButton />
                    </section>
                </div>
            </div>
        </section>
    );
};

export default checkoutPanelViewWrapper(CheckoutPanelView, 'checkout');
