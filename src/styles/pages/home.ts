import styled from "styled-components";

import theme from "styles/theme/light";

export const Container = styled.main`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  /*height: 100vh; */

  @media (max-width: ${theme.screenSize.tablet}) {
    flex-direction: column;
    position: relative;
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 1rem;

  @media (max-width: ${theme.screenSize.tablet}) {
    display: flex;
    flex-direction: column;
    margin-top: 7rem;
  }
`;

export const TasksSection = styled.div`
   @media (max-width: ${theme.screenSize.tablet}) {
    max-width: 100%;
    max-height: 70%;
    display: flex;

    .task-details {
      width: 100%;
      position: fixed;
      bottom: 0;
      left: 0;
      z-index: 1;
    }
  }

  @media (min-width: ${theme.screenSize.tablet}) {
    max-width: 800px;
    /* max-height: 500px; */

    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;

    section {
      min-height: 40rem;
      padding: 0.75rem;
      overflow-y: auto;
      max-height: 600px;

      border-radius: 0.25rem;

        /* width */
      ::-webkit-scrollbar {
        width: 0.5rem;
      }

      /* Track */
      ::-webkit-scrollbar-track {
        width: 0.5rem;
        background-color: #fff;
        /* background: rgba(255, 255, 255, 0); */
      }

      /* Handle */
      ::-webkit-scrollbar-thumb {
        background-color: #a8a8b3;//${theme.colors.priorityMedium};
        border-radius: 0.25rem;

        &:hover {
          background-color: ${theme.colors.priorityHigh};
        }
      }
    }

    .task-list-section {
      position: relative;
    }

    .task-details {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      /* align-items: center; */
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;


  button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 5rem;
    height: 5rem;
    /* margin: 1rem; */

    background-color: rgb(255, 0, 64);
    border-radius: 50%;
    box-shadow: 2px 2px 6px 2px #bbb;

    svg {
      font-size: 2.5rem;
      color: #fff;
    }
  }
`;
