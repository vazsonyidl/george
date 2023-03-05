import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'store';
import { filterCurrencyDataBySearchTerm } from 'helpers';

import { CurrencyRateState } from './currencyRateSlice';

export const selectCurrencyRateState = (state: RootState): CurrencyRateState => state.currencyRate;

export const selectCurrencyRateBaseCurrency = createSelector(
  [selectCurrencyRateState],
  (currencyRateState: CurrencyRateState) => currencyRateState.baseCurrency,
);

export const selectCurrencyRateSearchTerm = createSelector(
  [selectCurrencyRateState],
  (currencyRateState: CurrencyRateState) => currencyRateState.searchTerm,
);

export const selectCurrencyRateCurrencyData = createSelector(
  [selectCurrencyRateState, selectCurrencyRateSearchTerm],
  (currencyRateState: CurrencyRateState, searchTerm) =>
    filterCurrencyDataBySearchTerm(currencyRateState.currencyData, searchTerm),
);
