import { render, screen } from '../../../testing/test-utils';
import React from 'react';
import { PrizeOutSelectedRedemptionButton } from './prizeout-redemption-button';
import { Provider } from 'react-redux';
import createStore from '../../../store';
import '@testing-library/jest-dom/extend-expect';

describe('Test PrizeOutRedemption Component', () => {
    test('Component matches snapshot', () => {
        const { asFragment } = render(
            <Provider store={createStore}>
                <PrizeOutSelectedRedemptionButton id="exampleId" amount="10" />
            </Provider>,
        );
        expect(asFragment()).toMatchSnapshot();
    });

    test('Component Prizeout Selected renders', () => {
        render(
            <Provider store={createStore}>
                <PrizeOutSelectedRedemptionButton id="exampleId" amount="10" />
            </Provider>,
        );
        const divElement = screen.getByRole('button');
        expect(divElement).toBeInTheDocument();
    });

    test('component Prizeout Selected renders with correct class', () => {
        render(
            <Provider store={createStore}>
                <PrizeOutSelectedRedemptionButton id="exampleId" amount="10" />
            </Provider>,
        );
        const divElement = screen.getByRole('button');
        expect(divElement).toHaveClass('prizeout-redemption-button__not-selected');
    });
});
