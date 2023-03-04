import { FetchCurrencyExchangeRatesFXReturn } from 'types';

export interface FetchCurrencyExchangeRatesReturn {
  baseCurrency: string;
  comparisonDate: string;
  institute: string;
  lastUpdated: string;
  fx: Array<FetchCurrencyExchangeRatesFXReturn>;
}
