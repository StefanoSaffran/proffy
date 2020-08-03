import React, { createContext, useCallback, useContext } from 'react';
import {
  ThemeProvider as StyledProvider,
  DefaultTheme,
} from 'styled-components';
import usePersistedState from './usePersistedState';

import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

interface IThemeContextData {
  toggleTheme(): void;
}

const ThemeContext = createContext<IThemeContextData>({} as IThemeContextData);

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>(
    '@proffy:theme',
    dark,
  );

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);
  }, [theme.title, setTheme]);

  return (
    <StyledProvider theme={theme}>
      <ThemeContext.Provider value={{ toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </StyledProvider>
  );
};

function useTheme(): IThemeContextData {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { ThemeProvider, useTheme };
