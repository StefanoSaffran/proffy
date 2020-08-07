import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  label {
    font-size: 1.4rem;
  }

  textarea {
    width: 100%;
    min-height: 8rem;
    height: 16rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    background: var(--color-input-background);
    border: 1px solid var(--color-line-in-white);
    padding: 1.2rem 1.6rem;
    resize: vertical;
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
    bottom: 7px;
  }

  & + div {
    margin-top: 2.4rem;
  }

  @media (min-width: 700px) {
    & + div {
      margin-top: 0;
    }
  }
`;
