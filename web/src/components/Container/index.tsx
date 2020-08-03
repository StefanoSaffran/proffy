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

      @media (min-width: 1100px) {
        width: min(90vw, 1100px);

        display: grid;
        grid-template-rows: 350px 1fr;
        grid-template-columns: 2fr 1fr 1fr;
        grid-template-areas: 'logo hero hero' 'buttons buttons total';
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
