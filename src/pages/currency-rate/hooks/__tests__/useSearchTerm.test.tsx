import React from 'react';
import { Provider } from 'react-redux';
import { renderHook } from '@testing-library/react';

import { store } from 'store';

import { MemoryRouter } from 'react-router-dom';
import { useSearchTerm } from '../useSearchTerm';

describe('jest works', () => {
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <MemoryRouter initialEntries={['', '/currency-rate?search=asd']}>
      <Provider store={store}>{children}</Provider>
    </MemoryRouter>
  );
  renderHook(() => useSearchTerm(), { wrapper });

  it('should set search-term from url', () => {
    const { currencyRate } = store.getState();
    expect(currencyRate.searchTerm).toEqual('asd');
  });
});
