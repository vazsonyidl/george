import { CurrencyRateData, FetchCurrencyExchangeRatesFXReturn } from 'types';

const filterFXsDataWithMissingValues = (fxData: FetchCurrencyExchangeRatesFXReturn): boolean =>
  fxData.currency !== '' && fxData.exchangeRate !== undefined && fxData.nameI18N !== undefined;

export const convertFXsToStoreCurrencyData = (
  fx: Array<FetchCurrencyExchangeRatesFXReturn>,
): Array<CurrencyRateData> =>
  fx.filter(filterFXsDataWithMissingValues).map((fxData) => {
    const { middle: exchangeRateMiddle = 1 } = fxData?.exchangeRate || {};

    return {
      countryCode: fxData.currency,
      currencyName: fxData.currency,
      exchangeRate: +(1 / exchangeRateMiddle).toFixed(6),
      countryName: fxData.nameI18N,
    };
  });

export const filterCurrencyDataBySearchTerm = (
  currencyData: Array<CurrencyRateData>,
  searchTerm: string,
): Array<CurrencyRateData> => {
  if (searchTerm === '') return currencyData;

  return currencyData.filter((data) =>
    data.countryName.trim().toLowerCase().includes(searchTerm.toLowerCase()),
  );
};
