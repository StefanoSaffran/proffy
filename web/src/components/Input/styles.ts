import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  label {
    font-size: 1.4rem;
  }

  input {
    width: 100%;
    height: 5.6rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    background: var(--color-input-background);
    border: 1px solid var(--color-line-in-white);
    padding: 0 1.6rem;
    font: 1.6rem Archivo;
  }

  &:focus-within::after {
    content: '';

    width: calc(100% - 3.2rem);
    height: 2px;
    background: ${({ theme }) =>
      theme.title === 'light'
        ? 'var(--color-primary-light)'
        : 'var(--color-primary-darker)'};
    position: absolute;
    left: 1.6rem;
    right: 1.6rem;
    bottom: 0;
  }

  & + div {
    margin-top: 2.4rem;
  }
`;
