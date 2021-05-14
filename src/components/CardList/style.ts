import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;


  ul {
    display: flex;
    flex-direction: column;
    max-width: 100%;
    list-style: none;
  }
`;

export const Footer = styled.footer`
  display: flex;
  position: fixed;
  bottom: 0;
  right: 0;

  button {
    width: 5rem;
    height: 5rem;
    margin: 2rem;
    background-color: rgb(255, 0, 64);
    border-radius: 50%;
    box-shadow: 2px 2px 6px 2px #bbb;

    svg {
      font-size: 3rem;
      color: #fff;
    }
  }
`;
