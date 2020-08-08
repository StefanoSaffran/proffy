import React, { useCallback, FC, ReactNode, useContext } from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from 'styled-components';

import backIcon from '../../assets/images/icons/back.png';
import logo from '../../assets/images/logo.png';

import { useTheme } from '../../hooks/theme';

import * as S from './styles';

interface IProps {
  title: string;
  headerRight?: ReactNode;
}

const PageHeader: FC<IProps> = ({ title, headerRight, children }) => {
  const { navigate } = useNavigation();
  const { title: themeTitle } = useContext(ThemeContext);
  const { toggleTheme } = useTheme();

  const handleGoBack = useCallback(() => navigate('Landing'), [navigate]);

  return (
    <S.Container>
      <S.TopBar>
        <S.Button onPress={handleGoBack}>
          <Image source={backIcon} resizeMode="contain" />
        </S.Button>

        <S.ToggleThemeButton onPress={toggleTheme}>
          <S.ThemeIcon name={themeTitle === 'light' ? 'sun' : 'moon'} />
        </S.ToggleThemeButton>
        <Image source={logo} resizeMode="contain" />
      </S.TopBar>

      <S.HeaderTitleContainer>
        <S.Title>{title}</S.Title>
        {headerRight}
      </S.HeaderTitleContainer>
      {children}
    </S.Container>
  );
};

export default PageHeader;
