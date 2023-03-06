import { createSlice } from '@reduxjs/toolkit';
import { CurrencyRateData } from 'types';

import {
  fetchCurrencyExchangeRates,
  setCurrencyRateExchangeRatesReducer,
  setCurrencyRateSearchTermReducer,
} from './reducers';

export interface CurrencyRateState {
  baseCurrency: string;
  searchTerm: string;
  currencyData: Array<CurrencyRateData>;
}

const initialState: CurrencyRateState = {
  baseCurrency: '',
  searchTerm: '',
  currencyData: [],
};

export const currencyRateSlice = createSlice({
  name: 'currencyRate',
  initialState,
  reducers: {
    setCurrencyRateSearchTermReducer,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCurrencyExchangeRates.fulfilled, setCurrencyRateExchangeRatesReducer);
  },
});

const { setCurrencyRateSearchTermReducer: setCurrencyRateSearchTerm } = currencyRateSlice.actions;

export { setCurrencyRateSearchTerm };
