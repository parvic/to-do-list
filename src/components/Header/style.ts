import styled from "styled-components";

import theme from "../../styles/theme/light";

export const Container = styled.header`
  width: 5rem;
  height: 100%;
  padding: 2rem 0;

  position: fixed;
  top: 0;
  left: 0;

  background-color: rgb(255, 0, 64);

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    height: 100%;
    margin: 0 auto;
  }

  h1 {
    color: #fff;
  }

  button {
    background-color: transparent;
    border: none;
    color: #fff;

    svg {
      font-size: 1.5rem;
    }
  }

  @media (max-width: ${theme.screenSize.tablet}) {
    position: unset;

    width: 100%;
    height: 5rem;
    padding: 0 2rem;
    margin-bottom: 3rem;

    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }
`;

export const Search = styled.div`

`;
