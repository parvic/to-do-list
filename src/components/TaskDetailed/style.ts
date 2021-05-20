import styled from 'styled-components';
import theme from 'styles/theme/light'

interface PriorityProps {
  priority: string;
}

export const Container = styled.div<PriorityProps>`
  width: 100%;
  max-height: 400px;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  background-color: ${theme.colors.sectionBackground};
  border-radius: 0.25rem;
  box-shadow: 1px 1px 5px 1px #bbb;
  border-left:
    ${(props) => props.priority === "priorityLow" ?
      `8px solid ${theme.colors.priorityLow}` :
        (props) => props.priority === "priorityMedium" ?
          `8px solid ${theme.colors.priorityMedium}` : `8px solid ${theme.colors.priorityHigh}`};

  .task-title {
    color: #363F5F;
    font-size: 2rem;
    line-height: 2rem;
    margin-bottom: 1rem;
  }

  .date-tag {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 2rem;
    border-bottom: 1px solid purple;
    padding-bottom: 1rem;
  }

  .description {
    h3 {
      margin-bottom: 0.5rem;
      text-align: left;
      font-size: 1.5rem;
    }

    p {

    }
  }
  .task-close-button {
    position: absolute;
    background-color: transparent;

    right: 1rem;
    top: 1rem;

    transition: filter 0.2s;

    color: #A8A8B3;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
