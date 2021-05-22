import styled from "styled-components";

interface FormProps {
  hasError: boolean;
}

export const Container = styled.form<FormProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  position: relative;

  h2 {
    margin-bottom: 2rem;
    color: #363F5F;
  }

  input {
    width: 100%;
    height: 4rem;
    padding: 1rem;

    background-color: #e7e9ee;
    border: ${(props) => props.hasError ? '1px solid #C53030': '1px solid #d7d7d7'};

    border-radius: 0.25rem;

    font-weight: 400;
    font-size: 1rem;
    color: #969CB2;

    &::placeholder {
      color: #969CB2;
    }

    &+input{
      margin-top: 1rem;
    }
  }

  .react-select-container {
    width: 100%;
    margin: 1rem 0;
  }

  .react-select__control {
    height: 4rem;
    background-color: #e7e9ee;
  }

  .react-select__value-container {
    height: 100%;
  }

  .react-select__single-value {
    color: #969CB2;
  }
`;

export const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 4rem;
  margin-top: 2rem;

  color: #fff;
  font-size: 1.25rem;
  font-weight: 600;

  background-color: #33CC95;
  border-radius: 0.25rem;
  box-shadow: 1px 1px 5px 1px #bbb;
`;

export const Error = styled.span`
    display: block;
    color: #c53030;
    margin-top: 8px;
`;
