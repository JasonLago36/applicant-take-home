import React from 'react';
import Classnames from 'classnames';
import { useAppSelector } from '../../../hooks';
import './prizeout-rewards-calculator-container.less';
import { selectedRedemptionSelector } from '../../../slices/chosen-offer-slice';

export const PrizeOutRewardsCalculator: React.FC = (): React.ReactElement => {
    const classes: string = Classnames('calculations-container');
    const { cost, value, bonus, saving } = useAppSelector(selectedRedemptionSelector);

    return (
        <div className={classes}>
            <span>Redemption Amount</span> <span className="calculations-container__align--text--right">{cost}</span>
            <span className="calculations-container__prize--out">Prizeout Bonus (+{bonus ? bonus : '0'}%)</span>
            <span className="calculations-container__prize--out calculations-container__align--text--right">
                {saving}
            </span>
            <span>You Get</span> <span className="calculations-container__align--text--right">{value}</span>
        </div>
    );
};

export default PrizeOutRewardsCalculator;
