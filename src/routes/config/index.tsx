import React from 'react';

import { createBrowserRouter } from 'react-router-dom';

import App from 'components/App';
import CurrencyRatePage from 'pages/currency-rate';
import { ApplicationPaths } from '../types';

export const router = createBrowserRouter([
  {
    path: ApplicationPaths.ROOT,
    element: <App />,
  },
  {
    path: ApplicationPaths.CURRENCY_RATE,
    element: <CurrencyRatePage />,
  },
]);
