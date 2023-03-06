import { configureStore } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import fireEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import { rootReducer } from 'store';
import { currencyRateDataReducerFixture } from 'fixtures';

import CurrencyRatePage from './index';
import { testIds } from '../../helpers';

describe('CurrencyRate page', () => {
  let queryByTestIdLocal: (...rest: Array<any>) => HTMLElement | null;

  const preloadedStore = configureStore({
    reducer: rootReducer,
    preloadedState: {
      currencyRate: {
        baseCurrency: 'EUR',
        searchTerm: '',
        currencyData: currencyRateDataReducerFixture(),
      },
    },
  });

  beforeEach(() => {
    const { queryByTestId } = render(
      <MemoryRouter initialEntries={['', '/currency-rate?search=doll']}>
        <Provider store={preloadedStore}>
          <CurrencyRatePage />
        </Provider>
      </MemoryRouter>,
    );

    queryByTestIdLocal = queryByTestId;
  });

  it('should populate search term from URL', () => {
    const { currencyRate } = preloadedStore.getState();
    expect(currencyRate.searchTerm).toEqual('doll');
  });

  it('should render search & populate its value from URL', () => {
    const searchInput: HTMLInputElement = queryByTestIdLocal(
      testIds.currencyRateSearchInput,
    ) as HTMLInputElement;

    expect(searchInput).toBeInTheDocument();
    expect(searchInput.value).toEqual('doll');
  });

  it('should not render any currency rate card for non-existing search matches', () => {
    const currencyRateCard = queryByTestIdLocal(testIds.currencyRateCard);
    expect(currencyRateCard).not.toBeInTheDocument();
  });

  it('on user type should render card - for matching search params', () => {
    const user = fireEvent.setup();
    const searchInput: HTMLInputElement = queryByTestIdLocal(
      testIds.currencyRateSearchInput,
    ) as HTMLInputElement;

    user.clear(searchInput);
    user.type(searchInput, 'eu');

    const currencyRateCard = queryByTestIdLocal(testIds.currencyRateCard);
    expect(currencyRateCard).toBeInTheDocument();
    expect(currencyRateCard).toHaveTextContent('EUR');
  });
});
