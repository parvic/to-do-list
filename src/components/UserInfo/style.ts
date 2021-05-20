import styled from "styled-components";

import theme from "../../styles/theme/light"

export const Container = styled.div`
  color: #000;
  width: 100%;

  display: flex;
  flex-direction: column;

  padding: 0 4rem;
  margin-bottom: 1.5rem;


  .user-content {
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-bottom: 2rem;

    .user-text-info {}

    img {
      width: 5rem;
      height: 5rem;
      margin-right: 2rem;
      border-radius: 50%;
    }
  }

  .task-counter {
    display: flex;
    flex-direction: row;
    margin-bottom: 0.5rem;

    p {
      margin-right: 4rem;
    }
  }

  &:after {
    content:"";
    display: block;
    border-bottom: 1px solid blue;
  }

  @media(max-width: ${theme.screenSize.tablet}) {
    margin-bottom: 3rem;
  }
`;
