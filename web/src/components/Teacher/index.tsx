import React from 'react';

import whatsappIcon from '../../assets/icons/whatsapp.svg';

import { Container } from './styles';

const Teacher: React.FC = () => {
  return (
    <Container>
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/34041575?s=460&u=56336a7461a823175e18fb46f36d6d1bad0a4110&v=4"
          alt="Stefano Saffran"
        />

        <div>
          <strong>Stefano Saffran</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Entusias das melhores tecnologias de matemática avançada.
        <br />
        <br />
        Apaixonado por explodir coisas em laboratório e por mudar a vida das
        pessoas através de experiências.
      </p>

      <footer>
        <p>
          Preço:
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </Container>
  );
};

export default Teacher;
