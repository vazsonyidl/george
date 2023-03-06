import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch } from 'store';
import { getTestIds, testIds } from 'helpers';
import { CurrencyCard } from 'components/CurrencyCard';
import Header from 'components/Header';

import {
  fetchCurrencyExchangeRates,
  selectCurrencyRateBaseCurrency,
  selectCurrencyRateCurrencyData,
} from './redux';

import styles from './CurrencyRate.module.scss';
import CurrencyRateSearch from './components/CurrencyRateSearch';
import { useSearchTerm } from './hooks/useSearchTerm';

const CurrencyRatePage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useSearchTerm();

  const baseCurrency = useSelector(selectCurrencyRateBaseCurrency);
  const currencyData = useSelector(selectCurrencyRateCurrencyData);

  const shouldDisplayCurrencyData = currencyData.length > 0;

  useEffect(() => {
    dispatch(fetchCurrencyExchangeRates());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <CurrencyRateSearch />
      <div
        className={styles.container}
        {...getTestIds(testIds.currencyRateCardListContainer)}
      >
        {shouldDisplayCurrencyData
          ? currencyData.map((data) => (
              <CurrencyCard
                key={data.countryCode}
                currencyCode={data.currencyCode}
                countryCode={data.countryCode}
                currencyName={data.currencyName}
                exchangeRate={data.exchangeRate}
                exchangeCurrency={baseCurrency}
                className={styles.card}
                testId={testIds.currencyRateCard}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default CurrencyRatePage;
