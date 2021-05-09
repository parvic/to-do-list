import styled from "styled-components";

export const Container = styled.div`

  max-width: 280px;
  border-radius: 10px;

  svg {
    color: #fff;
    font-size: 1.5rem;
  }

  &+div {
    margin-top: 1rem;
  }

  li {
    list-style: none;
    /* background-color: #FF008C; */
    border-radius: 10px;
    padding: 0 10px;
    overflow: hidden;
    cursor: pointer;

  .content {
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
  }
}

.avatar {
  width: 40px;
  height: 40px;
  background-color: #666;
  border-radius: 20px;
}

.row {
  width: 100%;
  height: 8px;
  background-color: #999;
  border-radius: 10px;
  margin-top: 12px;
}


`;
