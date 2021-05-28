import styled from "styled-components";
import { motion } from "framer-motion"

import theme from "../../styles/theme/light";

export const Container = styled(motion.nav)`
  width: 5rem;
  height: 100%;
  padding: 2rem 2rem;

  position: fixed;
  top: 0;
  left: 0;

  background-color: rgb(255, 0, 64);

  z-index: 1;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    max-height: 5rem;

    height: 100%;
    margin: 0 auto;
  }

  h1 {
    color: #fff;
  }

  button {
    /* margin-left: 2rem; */

    background-color: transparent;
    border: none;
    color: #fff;

    transform: filter 0.2s;

    svg {
      font-size: 1.5rem;
    }

    &:hover {
      filter: brightness(0.95);
    }
  }

  @media (max-width: ${theme.screenSize.tablet}) { }

  #task-filter-menu {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    margin-top: 1rem;
    p {
      color: #fff;
      font-weight: 600;
      font-size: 1.5rem;

      margin-bottom: 0.75rem;
    }

    button {
      font-size: 1.25rem;
      margin-left: 1rem;

      & + button {
        margin-top: 1rem;
      }
    }
  }
`;
