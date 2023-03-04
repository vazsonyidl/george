import { CurrencyRateData, FetchCurrencyExchangeRatesFXReturn } from 'types';

export const convertFXsToStoreCurrencyData = (
  fx: Array<FetchCurrencyExchangeRatesFXReturn>,
): Array<CurrencyRateData> => fx.map((fxData) => ({
  countryCode: fxData.currency,
  currencyName: fxData.currency,
  exchangeRate: fxData.exchangeRate?.middle ?? 0,
}));
