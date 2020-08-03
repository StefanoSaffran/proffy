import React, { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyles from './styles/global';

import AppProvider from './hooks';
import Routes from './routes';

const App: FC = () => {
  return (
    <Router>
      <AppProvider>
        <Routes />
        <GlobalStyles />
      </AppProvider>
    </Router>
  );
};

export default App;
