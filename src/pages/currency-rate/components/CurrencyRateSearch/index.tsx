import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch } from 'store';
import { getTestIds, testIds } from 'helpers';
import { selectCurrencyRateSearchTerm, setCurrencyRateSearchTerm } from '../../redux';

import styles from './CurrencyRateSearch.module.scss';

const CurrencyRateSearch: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const searchTerm = useSelector(selectCurrencyRateSearchTerm);

  const onSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setCurrencyRateSearchTerm(event.target.value));
  };

  return (
    <div className={styles.root}>
      <label
        htmlFor="currencySearch"
        className={styles.label}
      >
        Search
      </label>
      <input
        onChange={onSearchTermChange}
        value={searchTerm}
        id="currencySearch"
        aria-label="currency rate search term"
        {...getTestIds(testIds.currencyRateSearchInput)}
      />
    </div>
  );
};

export default CurrencyRateSearch;
