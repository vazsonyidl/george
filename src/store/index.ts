import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { currencyRateSlice } from 'pages/currency-rate/redux';

export const rootReducer = combineReducers({
  currencyRate: currencyRateSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
