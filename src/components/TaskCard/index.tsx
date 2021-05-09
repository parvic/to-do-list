import { Checkbox } from '@material-ui/core';
import { useContext, useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import DeleteIcon from '@material-ui/icons/Delete';

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
        <Checkbox
          className="checkbox"
          color="default"
          checked={done}
          onChange={handleToggle}
        />

        <S.Description>
          <p>{title}</p>
        </S.Description>
        <button type="button" onClick={handleDeleteTask}>
          <DeleteIcon />
        </button>
      </S.Main>
    </S.Container>
  );
}
