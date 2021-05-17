import styled from 'styled-components';
import theme from 'styles/theme/light'

export const Container = styled.div`
  width: 100%;
  max-height: 400px;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: ${theme.colors.sectionBackground};
  border-radius: 0.25rem;
  border-left: 8px solid #33CC95;
  box-shadow: 1px 1px 5px 1px #bbb;

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
      text-align: center;
      font-size: 1.5rem;
    }

    p {

    }
  }

`;
