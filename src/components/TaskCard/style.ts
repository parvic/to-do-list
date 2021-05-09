import styled from "styled-components";

export const Container = styled.div`
  max-width: 280px;
  height: 80px;
  background-color: #FF008C;
  border-radius: 10px;
  svg {
    color: #fff;
    font-size: 1.5rem;
  }

`;

export const Main = styled.main`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */

  p {
    margin-left: 5px;
    width: 100%;
    font-size: 1.5rem;
  }

  span {
    font-size: 1rem;
  }

  .functions {
    display: flex;
    margin-left: auto;
    margin-right: 5px;

    button {
      background-color: transparent;
      border: none;

      /* svg {
        font-size: 1rem;
      } */
    }
  }
`;

export const Description = styled.div`
  color: #fff;
`;
