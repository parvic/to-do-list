import { useContext } from 'react';

import { TaskContext } from 'context/TaskContext';
import * as S from './style';

export function UserInfo() {
  const { completedTasks } = useContext(TaskContext);
  return (
    <S.Container>
      <div className="user-content">
        <img
          src="https://www.ecp.org.br/wp-content/uploads/2017/12/default-avatar-1.png"
          alt="avatar"
        />

        <div className="user-text-info">
          <h3>Victor </h3>
          <p>Parente</p>
        </div>
      </div>
      <div className="task-counter">
        <p>Completed Tasks</p>
        <span>{completedTasks.length}</span>
      </div>
    </S.Container>
  );
}
