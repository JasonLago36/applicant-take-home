import React from 'react';
import { render, screen } from '../../../testing/test-utils';
import CheckoutButton from './checkout-button';
import { Provider } from 'react-redux';
import createStore from '../../../store';
import '@testing-library/jest-dom/extend-expect';

describe('checkout-button', () => {
    test('Component matches snapshot', () => {
        const { asFragment } = render(
            <Provider store={createStore}>
                <CheckoutButton />
            </Provider>,
        );
        expect(asFragment()).toMatchSnapshot();
    });

    test('Component Prizeout Selected renders', () => {
        render(
            <Provider store={createStore}>
                <CheckoutButton />
            </Provider>,
        );
        const divElement = screen.getByRole('button');
        expect(divElement).toBeInTheDocument();
    });

    test('Checkout Button has correct text', () => {
        render(
            <Provider store={createStore}>
                <CheckoutButton />
            </Provider>,
        );
        const divElement = screen.getByRole('button');
        expect(divElement).toHaveTextContent('Prizeout Gift Card');
    });
});
