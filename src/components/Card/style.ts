import styled from "styled-components";

import theme from 'styles/theme/light'

interface PriorityProps {
  priority: string;
}

export const Container = styled.div<PriorityProps>`
  max-width: 100%;
  box-shadow: 1px 1px 5px 1px #bbb;
  border-radius: 0.25rem;

  background-color: #FFFFFF;
  border-left:
    ${(props) => props.priority === "priorityLow" ?
      `8px solid ${theme.colors.priorityLow}` :
        (props) => props.priority === "priorityMedium" ?
          `8px solid ${theme.colors.priorityMedium}` : `8px solid ${theme.colors.priorityHigh}`};

  .priority{
    width: 8px;
    height: 100%;
    margin-right: 0.5rem;
    border-radius: 0.25rem 0 0 0.25rem;

  }

  .priorityLow {
    background-color: ${theme.colors.priorityLow};
  }

  .priorityMedium {
    background-color: ${theme.colors.priorityMedium};
  }

  .priorityHigh {
    background-color: ${theme.colors.priorityHigh};
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
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;

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
      align-items: center;
      justify-content: center;
      width: 4rem;
      height: 4rem;
      display: flex;
      margin-right: 0.25rem;

      button {

        width: 2.5rem;
        height: 2.5rem;

        background-color: transparent;
        border: none;
        border-radius: 50%;
        cursor: pointer;

        transition: background-color 0.2s;

        &:hover {
          background-color: rgba(0, 0, 0, 0.05);
        }
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
