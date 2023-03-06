import { CurrencyRateData } from 'types';

export const currencyRateDataReducerFixture = (): Array<CurrencyRateData> => [
  {
    countryCode: 'EUR',
    currencyCode: 'EUR',
    exchangeRate: 1,
    currencyName: 'Euro',
  },
];
