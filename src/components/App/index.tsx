import React from 'react';
import { Navigate } from 'react-router-dom';

import { ApplicationPaths } from 'routes';

const App: React.FC = () => <Navigate to={ApplicationPaths.CURRENCY_RATE} />;

export default App;
