import { useContext, useEffect } from 'react';
import { TaskContext } from '../../context/TaskContext';
import { Task } from '../Task';

export function List() {
  const { tasks, createNewTask } = useContext(TaskContext);

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  return (
    <>
      {tasks.map(task => {
        return (
          <Task
            key={task.position}
            title={task.title}
            position={task.position}
            description={task.description}
          />
        );
      })}

      <button type="button" onClick={createNewTask}>
        Add Task
      </button>
    </>
  );
}
