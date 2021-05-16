import styled from "styled-components";

import theme from "../styles/theme/light";

export const Container = styled.main`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 800px) {
  }
`;

export const MainContent = styled.div`
  @media (min-width: 1024px) {
    max-width: 800px;
    height: 500px;

    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;

    section {
      padding: 1rem;
      overflow-y: auto;

      /* background-color: ${theme.colors.sectionBackground}; */
      border-radius: 0.25rem;
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  position: fixed;
  bottom: 0;
  right: 0;

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 3rem;
    height: 3rem;
    margin: 2rem;

    background-color: rgb(255, 0, 64);
    border-radius: 50%;
    box-shadow: 2px 2px 6px 2px #bbb;

    svg {
      font-size: 2rem;
      color: #fff;
    }
  }
`;
