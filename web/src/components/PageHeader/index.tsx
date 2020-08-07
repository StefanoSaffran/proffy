import React, { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import Toggle from 'react-toggle';
import { ThemeContext } from 'styled-components';
import { FaMoon, FaSun } from 'react-icons/fa';

import { useTheme } from '../../hooks/theme';

import logo from '../../assets/logo.svg';
import bachIcon from '../../assets/icons/back.svg';

import { Header, TopBar, HeaderContent } from './styles';

interface IProps {
  title: string;
  description?: string;
}

const PageHeader: FC<IProps> = ({ title, description, children }) => {
  const { title: themeTitle } = useContext(ThemeContext);

  const { toggleTheme } = useTheme();
  return (
    <Header>
      <TopBar>
        <Link to="/">
          <img src={bachIcon} alt="Back" />
        </Link>
        <Toggle
          checked={themeTitle === 'dark'}
          onChange={toggleTheme}
          className="toggle"
          icons={{
            checked: <FaMoon color="yellow" size={12} />,
            unchecked: <FaSun color="yellow" size={12} />,
          }}
        />

        <img src={logo} alt="Back" />
      </TopBar>

      <HeaderContent>
        <strong>{title}</strong>
        {description && <p>{description}</p>}

        {children}
      </HeaderContent>
    </Header>
  );
};

export default PageHeader;
