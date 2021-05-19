import { ReactNode, useEffect, useState } from 'react';
import { createContext } from 'react';
import {
  storeTasks,
  getTasksFromLocalStorage,
} from '../utils/userPersistedState';

interface TaskContextData {
  tasks: TaskProps[];
  taskDetails: TaskProps;
  createNewTask: (title: string, description: string, priority: string) => void;
  deleteTask: (position: number) => void;
  showTaskDetails: (task: TaskProps) => void;
  storeCompletedTask: (task: TaskProps) => void;
  getTasksFromLocalStorage: () => [];
}

interface TaskProps {
  title: string;
  position: number;
  tag: string;
  priority: string;
  date: string;
  description: string;
  checked?: boolean;
}

interface TaskProviderProps {
  children: ReactNode;
}

export const TaskContext = createContext({} as TaskContextData);

export function TaskProvider({ children }: TaskProviderProps) {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [completedTasks, setCompletedTasks] = useState<TaskProps[]>([]);
  const [taskDetails, setTaskDetails] = useState<TaskProps>(null);
  const [lastPosition, setLastPosition] = useState();

  function createNewTask(title: string, description: string, priority: string) {
    console.log(title, description, priority);
    const task = {
      title: title,
      position: tasks.length === 0 ? 1 : tasks[tasks.length - 1].position + 1,
      tag: '',
      priority: priority,
      date: '',
      description: description,
      checked: false,
    };
    setTasks([...tasks, task]);
  }

  function deleteTask(position: number) {
    const tempTask = tasks.filter(task => {
      return task.position !== position && task;
    });
    setTasks(tempTask);
  }

  function showTaskDetails(task: TaskProps) {
    setTaskDetails(task);
  }

  function storeCompletedTask(completedTask: TaskProps) {
    setCompletedTasks([...completedTasks, completedTask]);
    console.log('>>>>>>>>>>');
    console.log(completedTasks);
  }

  useEffect(() => {
    setTasks(getTasksFromLocalStorage());
  }, []);

  useEffect(() => {
    storeTasks(tasks);
  }, [tasks]);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        taskDetails,
        createNewTask,
        deleteTask,
        showTaskDetails,
        storeCompletedTask,
        getTasksFromLocalStorage,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
