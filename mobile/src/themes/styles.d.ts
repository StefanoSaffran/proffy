import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme { //eslint-disable-line
    title: string;

    colors: {
      primary: string;
      background: string;
      text: string;
      colorTextBase: string;
      titcolorTextTitlele: string;

      cardBackground: string;
      inputBackground: string;
      footer: string;
      buttonColor: string;
    };
  }
}
