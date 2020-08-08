import React, { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import GlobalStyles from './styles/global';

import AppProvider from './hooks';
import Routes from './routes';

const App: FC = () => {
  return (
    <Router>
      <AppProvider>
        <Routes />
        <GlobalStyles />
        <ToastContainer autoClose={3500} />
      </AppProvider>
    </Router>
  );
};

export default App;
