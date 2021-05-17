import { useContext } from 'react';

import { TaskContext } from 'context/TaskContext';
import * as S from './style';

export function TaskDetailed() {
  const { taskDetails } = useContext(TaskContext);

  return (
    taskDetails && (
      <S.Container>
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
