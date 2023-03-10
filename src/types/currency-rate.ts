interface Rate {
  buy: number;
  indicator: number;
  lastModified: string;
  middle: number;
  sell: number;
}

export interface CurrencyRateData {
  countryCode: string;
  currencyCode: string;
  exchangeRate: number;
  currencyName: string;
}

export interface FetchCurrencyExchangeRatesFXReturn {
  banknoteRate: Rate;
  currency: string;
  exchangeRate?: Rate;
  flags: Array<string>;
  nameI18N: string;
  precision: number;
}
