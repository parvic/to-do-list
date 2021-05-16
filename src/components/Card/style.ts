import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  box-shadow: 2px 2px 5px 2px #bbb;
  border-radius: 0.25rem;

  background-color: #FFFFFF;

  .priority{
    width: 8px;
    height: 100%;
    background-color: #33CC95;
    margin-right: 0.5rem;
  }

  svg {
    color: #000;
    font-size: 1.5rem;
  }

  &+div {
    margin-top: 1rem;
  }

  li {
    width: 400px;
    max-width: 100%;
    list-style: none;
    padding-right: 0.5rem;
    overflow: hidden;
    cursor: pointer;

    .content {
      height: 4.5rem;
      display: flex;
      flex-direction: row;
      align-items: center;

      .title {
        width: 100%;

        p {
          margin-left: 5px;
          width: 100%;

          color: #000;
          font-size: 1.5rem;
        }

      }

    span {
      font-size: 1rem;
    }

    .functions {
      display: flex;
      margin-right: 5px;

      button {
        background-color: transparent;
        border: none;
        cursor: pointer;
      }
    }
  }

  .description {
    color: #fff;
    margin-bottom: 0.5rem;
    text-align: center;
  }
}

  @media (max-width: 425px) {
    width: 100vw;

    li {
      width: 100%;
    }
  }

  @media (max-width: 800px) {
  }
`;
