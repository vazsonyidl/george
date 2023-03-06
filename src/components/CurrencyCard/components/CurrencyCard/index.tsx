import React from 'react';

import { StyleableComponent, TestableComponent } from 'types';
import { CountryFlagCore, CountryFlagCoreSize } from 'components/CountryFlag';

import classNames from 'classnames';
import styles from './CurrencyCard.module.scss';
import { getTestIds } from '../../../../helpers';

interface CurrencyCardProps extends StyleableComponent, TestableComponent {
  countryCode: string;
  currencyName: string;
  exchangeRate: number;
  exchangeCurrency: string;
  countryName: string;
  flagSize?: CountryFlagCoreSize;
}

const CurrencyCard: React.FC<CurrencyCardProps> = ({
  countryCode,
  currencyName,
  exchangeRate,
  exchangeCurrency,
  countryName,
  flagSize,
  className,
  testId,
}) => (
  <div
    className={classNames(className, styles.root)}
    {...getTestIds(testId)}
  >
    <CountryFlagCore
      countryCode={countryCode}
      size={flagSize}
    />
    <div className={styles.currencyName}>
      {currencyName} - {countryName}
    </div>
    <div>
      {exchangeRate} {exchangeCurrency}
    </div>
  </div>
);

export default CurrencyCard;
