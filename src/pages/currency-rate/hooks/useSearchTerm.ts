import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch } from 'store';
import { selectCurrencyRateSearchTerm, setCurrencyRateSearchTerm } from '../redux';
import { CurrencyRateSearchQueryKeys } from '../types';

export const useSearchTerm = (): void => {
  const dispatch = useDispatch<AppDispatch>();
  const [searchParams, setSearchParams] = useSearchParams();

  const searchTerm = useSelector(selectCurrencyRateSearchTerm);

  useEffect(() => {
    const searchTerm = searchParams.get(CurrencyRateSearchQueryKeys.SEARCH) ?? '';

    dispatch(setCurrencyRateSearchTerm(searchTerm));
  }, []);

  useEffect(() => {
    setSearchParams({ [CurrencyRateSearchQueryKeys.SEARCH]: searchTerm });
  }, [searchTerm]);
};
