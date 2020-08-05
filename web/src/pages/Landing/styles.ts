import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  color: var(--color-text-base);
  background: var(--color-primary);
`;

export const LogoContainer = styled.div`
  text-align: center;
  margin-bottom: 3.2rem;

  img {
    height: 10rem;
  }

  h2 {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 4.6rem;
    margin-top: 0.8rem;
    color: var(--color-text-in-primary);
  }

  @media (min-width: 1100px) {
    align-self: center;
    margin: 0;
    text-align: left;

    h2 {
      text-align: initial;
      font-size: 3.6rem;
    }

    img {
      height: 100%;
    }
  }
`;

export const LandingImage = styled.img`
  width: 100%;
  max-height: 30rem;

  @media (min-width: 1100px) {
    justify-self: end;
    max-height: 35rem;
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
`;

export const Footer = styled.div`
  width: 100%;
  height: 40%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.colors.colorBackground};

  @media (min-width: 1100px) {
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;

  margin: 3.2rem 0;

  a {
    width: 28.2rem;
    height: 10.4rem;
    border-radius: 0.8rem;
    font: 700 2rem Archivo;

    display: flex;
    align-items: center;
    justify-content: center;

    color: #fff;

    transition: background-color 0.2s;

    img {
      width: 4rem;
      margin-right: 2.4rem;
    }

    &:first-child {
      margin-right: 1.6rem;
      background: var(--color-primary-lighter);

      &:hover {
        background: var(--color-primary-light);
      }
    }

    &:last-child {
      background: var(--color-secundary);

      &:hover {
        background: var(--color-secundary-dark);
      }
    }
  }

  @media (min-width: 1100px) {
    justify-self: flex-start;

    a {
      font-size: 2.4rem;
    }
  }
`;

export const Connections = styled.div`
  flex: 1;

  font-size: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > p {
    width: 70%;

    > span {
      display: block;
    }
  }

  > span {
    font-size: 1.2rem;
    line-height: 2rem;
    margin: 0;
    text-align: right;

    > img {
      margin-left: 0.8rem;
    }
  }

  @media (min-width: 1100px) {
    > span {
      justify-self: end;
      margin: 0 4rem;
    }
  }
`;
