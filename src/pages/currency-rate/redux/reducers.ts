import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { FetchCurrencyExchangeRatesReturn } from '../types';

export const fetchCurrencyExchangeRates = createAsyncThunk(
  'currencyRate/fetchCurrencyExchangeRates',
  async () => {
    const response = await axios.get<FetchCurrencyExchangeRatesReturn>(
      'https://run.mocky.io/v3/c88db14a-3128-4fbd-af74-1371c5bb0343',
    );
    return response.data;
  },
);
