import { createGlobalStyle } from 'styled-components';
import 'normalize.css';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 20px;
  }

  body {
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    font-size: .8rem;
  }

  small {
    font-size: 14px;
  }

  h1,
  h2 {
    font-weight: 500;
  }
`;
