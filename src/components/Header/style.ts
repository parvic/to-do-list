import styled from "styled-components";

export const Container = styled.header`
  padding: 0 2rem;
  margin-bottom: 2rem;
  width: 100%;

  background-color: rgb(255, 0, 64);

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 5rem;
    max-width: 580px;
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
`;

export const Search = styled.header`

`;
