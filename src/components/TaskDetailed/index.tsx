import { useContext } from 'react';
import { Close } from '@material-ui/icons';

import { TaskContext } from 'context/TaskContext';
import * as S from './style';

export function TaskDetailed() {
  const { taskDetails, closeTaskDetailsBox } = useContext(TaskContext);

  function handleCloseTaskDetails() {
    closeTaskDetailsBox();
  }

  return (
    taskDetails && (
      <S.Container priority={taskDetails.priority}>
        <button
          className="task-close-button"
          type="button"
          onClick={handleCloseTaskDetails}
        >
          <Close />
        </button>
        <h2 className="task-title">{taskDetails.title}</h2>
        <div className="date-tag">
          <span>{taskDetails.tag}</span>
          <p>{taskDetails.date}</p>
        </div>
        <div className="description">
          <h3>Description</h3>
          <p>{taskDetails.description}</p>
        </div>
      </S.Container>
    )
  );
}
