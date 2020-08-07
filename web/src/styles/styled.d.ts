import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme { //eslint-disable-line
    title: string;

    colors: {
      colorBackground: string;
      colorTitleInPrimary: string;
      colorTextInPrimary: string;
      colorTextTitle: string;
      colorTextComplement: string;
      colorTextBase: string;
      colorLineInWhite: string;
      colorInputBackground: string;
      colorButtonText: string;
      colorBoxBase: string;
      colorBoxFooter: string;
      iconsColor: string;
    };
  }
}
