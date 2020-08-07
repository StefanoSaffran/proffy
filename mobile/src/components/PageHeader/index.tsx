import React, { useCallback, FC } from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import backIcon from '../../assets/images/icons/back.png';
import logo from '../../assets/images/logo.png';

import * as S from './styles';

interface IProps {
  title: string;
}

const PageHeader: FC<IProps> = ({ title }) => {
  const { navigate } = useNavigation();

  const handleGoBack = useCallback(() => navigate('Landing'), [navigate]);

  return (
    <S.Container>
      <S.TopBar>
        <S.Button onPress={handleGoBack}>
          <Image source={backIcon} resizeMode="contain" />
        </S.Button>

        <Image source={logo} resizeMode="contain" />
      </S.TopBar>

      <S.Title>{title}</S.Title>
    </S.Container>
  );
};

export default PageHeader;
