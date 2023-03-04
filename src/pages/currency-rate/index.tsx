import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch } from 'store';
import { CurrencyCard } from 'components/CurrencyCard';

import {
  fetchCurrencyExchangeRates,
  selectCurrencyRateBaseCurrency,
  selectCurrencyRateCurrencyData,
} from './redux';

import styles from './CurrencyRate.module.scss';

const CurrencyRatePage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const baseCurrency = useSelector(selectCurrencyRateBaseCurrency);
  const currencyData = useSelector(selectCurrencyRateCurrencyData);

  const shouldDisplayCurrencyData = currencyData.length > 0;

  useEffect(() => {
    dispatch(fetchCurrencyExchangeRates());
  }, [dispatch]);

  return (
    <div>
      {shouldDisplayCurrencyData
        ? currencyData.map((data) => (
            <CurrencyCard
              countryCode={data.countryCode}
              currencyName={data.currencyName}
              exchangeRate={data.exchangeRate}
              exchangeCurrency={baseCurrency}
              className={styles.card}
            />
        ))
        : null}
    </div>
  );
};

export default CurrencyRatePage;