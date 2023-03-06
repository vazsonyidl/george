import { CurrencyRateData } from 'types';

export const currencyRateDataReducerFixture = (): Array<CurrencyRateData> => [
  {
    currencyName: 'Euro',
    countryCode: 'EUR',
    exchangeRate: 1,
    countryName: 'Euro',
  },
];
