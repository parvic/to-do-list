import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto;


  ul {
    display: flex;
    flex-direction: column;
    background-color: transparent;
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

    svg {
      font-size: 3rem;
      color: #fff;
    }
  }
`;
