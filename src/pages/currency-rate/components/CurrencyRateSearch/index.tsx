import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch } from 'store';
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
      <input
        onChange={onSearchTermChange}
        value={searchTerm}
      />
    </div>
  );
};

export default CurrencyRateSearch;