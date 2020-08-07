import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import giveClassesBgImage from '../../assets/images/give-classes-background.png';

import * as S from './styles';

const GiveClasses: React.FC = () => {
  const { goBack } = useNavigation();

  const handleGoBackToLandingPage = useCallback(() => goBack(), [goBack]);

  return (
    <S.Container>
      <S.ImageBackground
        source={giveClassesBgImage}
        imageStyle={{ resizeMode: 'contain' }}
      >
        <S.Title>Quer ser um prooffy?</S.Title>
        <S.Description>
          Para começar, você precisa se cadastrar como professor na nossa
          plataforma web
        </S.Description>
      </S.ImageBackground>

      <S.OkButton onPress={handleGoBackToLandingPage}>
        <S.ButtonText>OK</S.ButtonText>
      </S.OkButton>
    </S.Container>
  );
};

export default GiveClasses;
