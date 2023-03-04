import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'store';

import { CurrencyRateState } from './currencyRateSlice';

export const selectCurrencyRateState = (state: RootState): CurrencyRateState => state.currencyRate;

export const selectCurrencyRateBaseCurrency = createSelector(
  [selectCurrencyRateState],
  (currencyRateState: CurrencyRateState) => currencyRateState.baseCurrency,
);

export const selectCurrencyRateCurrencyData = createSelector(
  [selectCurrencyRateState],
  (currencyRateState: CurrencyRateState) => currencyRateState.currencyData,
);
