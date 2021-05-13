import styled from "styled-components";

export const Container = styled.div`

  svg {
    color: #fff;
    font-size: 1.5rem;
  }

  &+div {
    margin-top: 1rem;
  }

  li {
    width: 280px;
    list-style: none;
    /* border-radius: 10px; */
    padding: 0 10px;
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

        color: #fff;
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
`;
