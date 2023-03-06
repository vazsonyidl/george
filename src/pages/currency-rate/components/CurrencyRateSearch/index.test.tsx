import userEvent from '@testing-library/user-event';
import { act, render } from '@testing-library/react';
import { Provider } from 'react-redux';

import { store } from 'store';
import { testIds } from 'helpers';
import CurrencyRateSearch from './index';
import { setCurrencyRateSearchTerm } from '../../redux';

describe('CurrencyRateSearch component', () => {
  let getByTestIdLocal: (...rest: any) => HTMLElement;
  beforeEach(() => {
    const { getByTestId } = render(
      <Provider store={store}>
        <CurrencyRateSearch />
      </Provider>,
    );

    getByTestIdLocal = getByTestId;
  });

  it('should have default search term from store', () => {
    act(() => {
      store.dispatch(setCurrencyRateSearchTerm('test'));
    });

    const searchInput: HTMLInputElement = getByTestIdLocal(
      testIds.currencyRateSearchInput,
    ) as HTMLInputElement;
    expect(searchInput).toBeInTheDocument();
    expect(searchInput.value).toEqual('test');
  });

  it('user type should update store value', async () => {
    const user = userEvent.setup();
    const searchInput: HTMLInputElement = getByTestIdLocal(
      testIds.currencyRateSearchInput,
    ) as HTMLInputElement;
    expect(searchInput).toBeInTheDocument();

    await user.clear(searchInput);
    await user.type(searchInput, 'dummy23');
    const { currencyRate } = store.getState();

    expect(currencyRate.searchTerm).toEqual('dummy23');
  });
});
