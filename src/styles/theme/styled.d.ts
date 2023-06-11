import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  interface DefaultTheme {
    colors: {
      primary: string;
      primaryLight: string;
      primaryDark: string;
      secondary: string;
      mainLight: string;
      modalError: string;
      modalErrorLight: string;
      modalOk: string;
      modalOkLight: string;
    };

    fonts: {
      primary: string;
    };

    fontSizes: {
      small: string;
      normal: string;
      medium: string;
      big: string;
    };

    shadows: {
      button: string;
    };

    animation: {
      page: string;
    };

    keyframes: {
      fadeInTop: string;
    };
  }
}

export default DefaultTheme;
