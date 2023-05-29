import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  interface DefaultTheme {
    colors: {
      primary: string;
      primaryLight: string;
      primaryDark: string;
      secondary: string;
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
  }
}

export default DefaultTheme;
