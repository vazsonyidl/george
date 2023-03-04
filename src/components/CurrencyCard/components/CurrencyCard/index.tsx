import React from 'react';

import { StyleableComponent } from 'types';
import { CountryFlagCore, CountryFlagCoreSize } from 'components/CountryFlag';

import styles from './CurrencyCard.module.scss';

interface CurrencyCardProps extends StyleableComponent {
  countryCode: string;
  currencyName: string;
  exchangeRate: number;
  exchangeCurrency: string;
  flagSize?: CountryFlagCoreSize;
}

const CurrencyCard: React.FC<CurrencyCardProps> = ({
  countryCode,
  currencyName,
  exchangeRate,
  exchangeCurrency,
  flagSize,
}) => (
  <div className={styles.root}>
    <CountryFlagCore
      countryCode={countryCode}
      size={flagSize}
    />
    <div className={styles.currencyName}>{currencyName}</div>
    <div>
      {exchangeRate} {exchangeCurrency}
    </div>
  </div>
);

export default CurrencyCard;
