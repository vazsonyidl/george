import { configureStore } from '@reduxjs/toolkit';
import { currencyRateSlice } from 'pages/currency-rate/redux';

export const store = configureStore({
  reducer: {
    currencyRate: currencyRateSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
