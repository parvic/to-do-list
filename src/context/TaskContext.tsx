import { ReactNode, useEffect, useState } from 'react';
import { createContext } from 'react';
import {
  storeTasks,
  getTasksFromLocalStorage,
} from '../utils/userPersistedState';

interface TaskContextData {
  tasks: TaskProps[];
  createNewTask: () => void;
  deleteTask: (string) => void;
  getTasksFromLocalStorage: () => [];
}

interface TaskProps {
  title: string;
  position: number;
  description: string;
  checked?: boolean;
}

interface TaskProviderProps {
  children: ReactNode;
}

export const TaskContext = createContext({} as TaskContextData);

export function TaskProvider({ children }: TaskProviderProps) {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  function createNewTask() {
    const task = {
      title: `Task ${tasks.length}`,
      position: tasks.length === 0 ? 1 : tasks[tasks.length - 1].position + 1,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    };
    setTasks([...tasks, task]);
  }

  function deleteTask(position) {
    const tempTask = tasks.filter(task => {
      return task.position !== position && task;
    });
    setTasks(tempTask);
  }

  // function updateTaskPosition() {}

  useEffect(() => {
    setTasks(getTasksFromLocalStorage());
  }, []);

  useEffect(() => {
    storeTasks(tasks);
  }, [tasks]);

  return (
    <TaskContext.Provider
      value={{ tasks, createNewTask, deleteTask, getTasksFromLocalStorage }}
    >
      {children}
    </TaskContext.Provider>
  );
}
