import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    primary: "#454071",
    primaryLight: "#8C8fA3",
    primaryDark: "#1e193b",
    secondary: "#F2C65d",
    mainLight: "#ffffff",
    modalError: "#ac5b5b",
    modalErrorLight: "#e3b6b6cb",
    modalOk: "#61935b",
    modalOkLight: "#afeeb3c9",
  },

  fonts: {
    primary: "Inria Sans, sans-serif",
  },

  fontSizes: {
    small: "1rem",
    normal: "1.375rem",
    medium: "1.75rem",
    big: "2.18rem",
  },

  shadows: {
    button: "0px 6px 6px #0000003f",
  },

  animation: {
    page: "fade-in-top 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both",
  },

  keyframes: {
    fadeInTop:
      "{0% {transform: translateY(-50px); opacity: 0;}100% {transform: translateY(0); opacity: 1;}}",
  },
};

export default theme;
