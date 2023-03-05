import { CurrencyRateData, FetchCurrencyExchangeRatesFXReturn } from 'types';

export const convertFXsToStoreCurrencyData = (
  fx: Array<FetchCurrencyExchangeRatesFXReturn>,
): Array<CurrencyRateData> =>
  fx.map((fxData) => ({
    countryCode: fxData.currency,
    currencyName: fxData.currency,
    exchangeRate: fxData.exchangeRate?.middle ?? 0,
  }));

export const filterCurrencyDataBySearchTerm = (
  currencyData: Array<CurrencyRateData>,
  searchTerm: string,
): Array<CurrencyRateData> => {
  if (searchTerm === '') return currencyData;

  return currencyData.filter((data) =>
    data.currencyName.toLowerCase().includes(searchTerm.toLowerCase()),
  );
};
