import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { CurrencyRateData } from 'types';
import { convertFXsToStoreCurrencyData } from 'helpers';

import { fetchCurrencyExchangeRates } from './reducers';
import { FetchCurrencyExchangeRatesReturn } from '../types';

export interface CurrencyRateState {
  baseCurrency: string;
  currencyData: Array<CurrencyRateData>;
}

const initialState: CurrencyRateState = {
  baseCurrency: '',
  currencyData: [],
};

export const currencyRateSlice = createSlice({
  name: 'currencyRate',
  initialState,
  reducers: {
    setCurrencyRateBaseCurrency: (state, action: PayloadAction<string>) => {
      state.baseCurrency = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchCurrencyExchangeRates.fulfilled,
      (state: CurrencyRateState, action: PayloadAction<FetchCurrencyExchangeRatesReturn>) => {
        const { baseCurrency, fx } = action.payload;
        state.baseCurrency = baseCurrency;
        state.currencyData = convertFXsToStoreCurrencyData(fx);
      },
    );
  },
});
