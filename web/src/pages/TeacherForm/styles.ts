import styled from 'styled-components';

export const Main = styled.main`
  background: var(--color-box-base);
  width: min(100%, 74rem);
  border-radius: 0.8rem;
  margin: -3.2rem auto 3.2rem;
  padding-top: 6.4rem;
  overflow: hidden;

  > form {
    > fieldset {
      border: 0;
      padding: 0 2.4rem;

      > legend {
        font: 700 2.4rem Archivo;
        width: 100%;

        color: var(--color-text-title);
        margin-bottom: 2.4rem;
        padding-bottom: 1.6rem;
        border-bottom: 1px solid var(--color-line-in-white);

        display: flex;
        align-items: center;
        justify-content: space-between;

        > button {
          background: none;
          color: var(--color-primary);
          font: 700 1.6rem Archivo;

          transition: color 0.2s;

          &:hover {
            color: var(--color-primary-dark);
          }
        }
      }
    }
    > fieldset + fieldset {
      margin-top: 6.4rem;
    }

    > footer {
      padding: 4rem 2.4rem;
      margin-top: 6.4rem;
      border-top: 1px solid var(--color-line-in-white);
      background: var(--color-box-footer);

      > p {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.4rem;
        line-height: 1.4rem;
        color: var(--color-text-complement);

        > img {
          margin-right: 2rem;
        }
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
    }
  }

  @media (min-width: 700px) {
    > form {
      > fieldset {
        padding: 0 6.4rem;
      }
      > footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 4rem 6.4rem;

        > p {
          justify-content: space-between;
        }

        > button {
          width: 20rem;
          margin-top: 0;
        }
      }
    }
  }
`;

export const ScheduleItem = styled.div`
  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    column-gap: 1.6rem;
  }

  @media (min-width: 700px) {
    div + div {
      margin-top: 0;
    }
  }
`;
