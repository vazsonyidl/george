import { createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import { FetchCurrencyExchangeRatesReturn } from '../types';

import { CurrencyRateState } from './currencyRateSlice';
import { convertFXsToStoreCurrencyData } from '../../../helpers';

export const fetchCurrencyExchangeRates = createAsyncThunk(
  'currencyRate/fetchCurrencyExchangeRates',
  async () => {
    const response = await axios.get<FetchCurrencyExchangeRatesReturn>(
      'https://run.mocky.io/v3/c88db14a-3128-4fbd-af74-1371c5bb0343',
    );
    return response.data;
  },
);

export const setCurrencyRateSearchTermReducer = (
  state: CurrencyRateState,
  action: PayloadAction<string>,
): void => {
  state.searchTerm = action.payload;
};

export const setCurrencyRateExchangeRatesReducer = (
  state: CurrencyRateState,
  action: PayloadAction<FetchCurrencyExchangeRatesReturn>,
) => {
  const { baseCurrency, fx } = action.payload;
  state.baseCurrency = baseCurrency;
  state.currencyData = convertFXsToStoreCurrencyData(fx);
};
