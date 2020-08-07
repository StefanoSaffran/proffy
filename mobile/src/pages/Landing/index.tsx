import React, { FC, useCallback, useState, useEffect } from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heart from '../../assets/images/icons/heart.png';

import * as S from './styles';

const Landing: FC = () => {
  const { navigate } = useNavigation();
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get('connections').then(({ data }) => setTotalConnections(data));
  }, []);

  const handleNavigateToGiveClassesPage = useCallback(() => {
    navigate('GiveClasses');
  }, [navigate]);

  const handleNavigateToStudyPages = useCallback(() => {
    navigate('Study');
  }, [navigate]);

  return (
    <S.Container>
      <S.Image source={landingImg} style={{ resizeMode: 'contain' }} />

      <S.Title>
        Seja bem-vindo, {'\n'}
        <S.TitleBold>O que deseja fazer?</S.TitleBold>
      </S.Title>

      <S.ButtonsContainer>
        <S.ButtonStudy onPress={handleNavigateToStudyPages}>
          <Image source={studyIcon} />

          <S.ButtonText>Estudar</S.ButtonText>
        </S.ButtonStudy>

        <S.ButtonTeach onPress={handleNavigateToGiveClassesPage}>
          <Image source={giveClassesIcon} />

          <S.ButtonText>Dar aulas</S.ButtonText>
        </S.ButtonTeach>
      </S.ButtonsContainer>

      <S.TotalConnections>
        Total de {totalConnections} conexões já realizadas{' '}
        <Image source={heart} />
      </S.TotalConnections>
    </S.Container>
  );
};

export default Landing;
