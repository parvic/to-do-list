import { createGlobalStyle } from 'styled-components'

import theme from './theme/light'

const GlobalStyles = createGlobalStyle`
  * {
      margin:0;
      padding: 0;
      box-sizing: border-box;
    }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    background-color: ${theme.colors.background};
    width: 100%;
    height: 100vh;
    /* color: #fff; */
  }

  body, input, textarea, select, button {
    font: 400 1rem "Roboto", sans-serif;
  }

  button {
    cursor: pointer;
    border: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .react-modal-overlay {
    display:flex;
    align-items: center;
    justify-content: center;

    background-color: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }

  .react-modal-content {
    position: relative;
    width: 100%;
    max-width: 576px;
    padding: 3rem;

    border-radius: 0.25rem;

    background-color: #F0F2F5;
  }

  .react-modal-close-button {
    position: absolute;
    background-color: transparent;

    right: 1rem;
    top: 1rem;

    transition: filter 0.2s;

    color: #A8A8B3;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;

export default GlobalStyles
