import { Checkbox } from '@material-ui/core';
import { useContext, useState } from 'react';
import { TaskContext } from '../../context/TaskContext';
import * as S from './style';

interface TodoProps {
  title: string;
  position: number;
  description: string;
  done?: boolean;
}

export function Task({ title, position, description }: TodoProps) {
  const { deleteTask } = useContext(TaskContext);

  const [done, setDone] = useState(false);

  function handleToggle() {
    setDone(!done);
  }

  function handleDeleteTask() {
    deleteTask(position);
  }

  return (
    <S.Container>
      <S.Main>
        <Checkbox color="default" checked={done} onChange={handleToggle} />

        <S.Description>
          <p>{title}</p>
          <span>{description}</span>
        </S.Description>
        <button type="button" onClick={handleDeleteTask}>
          Delete
        </button>
      </S.Main>
    </S.Container>
  );
}
