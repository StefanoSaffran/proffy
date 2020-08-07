import styled from 'styled-components';
import { Form } from '@unform/web';

export const UnForm = styled(Form)`
  margin-top: 3.2rem;

  label {
    color: var(--color-text-in-primary);
  }

  > button {
    width: 100%;
    height: 5.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font: 700 1.6rem Archivo;
    background: var(--color-secundary);
    color: var(--color-button-text);
    border: 0;
    border-radius: 0.8rem;
    margin-top: 3.2rem;

    transition: background-color 0.2rem;

    &:hover {
      background: var(--color-secundary-dark);
    }
  }

  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 16px;

    position: absolute;
    bottom: -28px;

    > div + div {
      margin-top: 0;
    }
  }
`;

export const Main = styled.main`
  width: 90%;
  margin: 3.2rem auto;

  @media (min-width: 700px) {
    padding: 3.2rem 0;
    max-width: 740px;
    margin: 0 auto;
  }
`;
