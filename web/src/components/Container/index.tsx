import styled, { css } from 'styled-components';

interface IProps {
  page: string;
}

export default styled.div<IProps>`
  width: min(90vw, 700px);

  ${({ page }) =>
    page === 'landing' &&
    css`
      width: min(90vw, 700px);
      display: flex;
      flex-direction: column;

      @media (min-width: 1100px) {
        width: min(90vw, 1100px);
        flex-direction: row;
      }
    `}

  ${({ page }) =>
    page === 'teacher-list' &&
    css`
      width: 100vw;
      height: 100vh;
      }
    `}

    ${({ page }) =>
      page === 'form' &&
      css`
      width: 100vw;
      height: 100vh;
      }
    `}
`;
