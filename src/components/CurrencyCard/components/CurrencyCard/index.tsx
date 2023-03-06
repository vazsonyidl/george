import React from 'react';

import { StyleableComponent, TestableComponent } from 'types';
import { CountryFlagCore, CountryFlagCoreSize } from 'components/CountryFlag';

import classNames from 'classnames';
import styles from './CurrencyCard.module.scss';
import { getTestIds } from '../../../../helpers';

interface CurrencyCardProps extends StyleableComponent, TestableComponent {
  countryCode: string;
  currencyCode: string;
  exchangeRate: number;
  exchangeCurrency: string;
  currencyName: string;
  flagSize?: CountryFlagCoreSize;
}

const CurrencyCard: React.FC<CurrencyCardProps> = ({
  countryCode,
  currencyName,
  exchangeRate,
  exchangeCurrency,
  currencyCode,
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
      {currencyCode} - {currencyName}
    </div>
    <div>
      {exchangeRate} {exchangeCurrency}
    </div>
  </div>
);

export default CurrencyCard;
