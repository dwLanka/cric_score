import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  :root {
      --ff-primary: "Roboto", sans-serif;
      --ff-secondary: "Source Sans Pro", sans-serif;

      --fw-100: 100;
      --fw-300: 300;
      --fw-400: 400;
      --fw-500: 500;
      --fw-700: 700;

      --h1: 34px;
      --h2: 28px;
      --h3: 24px;
      --body-sm: 12px;
      --body: 14px;
      --body-lg: 16px;
      --caption: 12px;
      --small: 11px;
      --ex-small: 9px;

      --clr-primary: hsl(196, 39%, 32%);
      --clr-secondary: hsl(191, 33%, 52%);
      --clr-accent: hsl(19, 66%, 67%);
      --clr-gray: hsl(0, 0%, 93%);
      --clr-error: hsl(0, 67%, 50%);
      --clr-success: hsl(98, 100%, 36%);
      --clr-info: #000;
      --clr-warning: #000;
      --clr-black: #000000;
      --clr-white: hsl(0, 0%, 100%);
      --clr-neutral: hsl(0, 0%, 100%);

      --text-clr-primary: hsl(0, 0%, 0%);
      --text-clr-secondary: #000;
      --text-clr-trinary: #000;
      --text-clr-gary: #000;
      --text-clr-black: #000;
      --text-clr-white: #000;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    font-family: var(--ff-primary);
  }

  html {
    font-size: 16px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  .caption {
    font-family: var(--ff-secondary);
    margin: 0;
    padding: 0;
    line-height: 1.33;
  }

  input:disabled,
  a:disabled,
  button:disabled {
    cursor: auto;
  }

  ::-webkit-scrollbar {
    width: 6px;
    height: 5px;
  }

  ::-webkit-scrollbar-corner {
    height: 0;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 25px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: lightblue;
    border-radius: 25px;
  }
`;

export default GlobalStyles;
