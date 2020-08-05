import React from 'react';
import { Link } from 'react-router-dom';

import Container from '../../components/Container';

import logo from '../../assets/logo.svg';
import landingLogo from '../../assets/landing.svg';

import studyIcon from '../../assets/icons/study.svg';
import giveClassesIcon from '../../assets/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/icons/purple-heart.svg';

import {
  Wrapper,
  LogoContainer,
  LandingImage,
  Header,
  Footer,
  ButtonWrapper,
  Connections,
} from './styles';

const Landing: React.FC = () => {
  return (
    <Wrapper>
      <Header>
        <Container page="landing">
          <LogoContainer>
            <img src={logo} alt="Proffy" />
            <h2>Sua plataforma de estudos online.</h2>
          </LogoContainer>

          <LandingImage src={landingLogo} alt="Study plataform" />
        </Container>
      </Header>
      <Footer>
        <Container page="landing">
          <Connections>
            <p>
              <span>Seja bem-vindo.</span>
              <strong>O que deseja fazer?</strong>
            </p>
            <span>
              Total de 200 conexões já realizadas
              <img src={purpleHeartIcon} alt="Purple Heart" />
            </span>
          </Connections>

          <ButtonWrapper>
            <Link to="/study">
              <img src={studyIcon} alt="Study" />
              Estudar
            </Link>

            <Link to="/give-classes">
              <img src={giveClassesIcon} alt="Teach" />
              Dar aulas
            </Link>
          </ButtonWrapper>
        </Container>
      </Footer>
    </Wrapper>
  );
};

export default Landing;
