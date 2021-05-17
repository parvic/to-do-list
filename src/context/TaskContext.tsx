import { ReactNode, useEffect, useState } from 'react';
import { createContext } from 'react';
import {
  storeTasks,
  getTasksFromLocalStorage,
} from '../utils/userPersistedState';

interface TaskContextData {
  tasks: TaskProps[];
  taskDetails: TaskProps;
  createNewTask: (title: string, description: string) => void;
  deleteTask: (position: number) => void;
  showTaskDetails: (task: TaskProps) => void;
  getTasksFromLocalStorage: () => [];
  isModalTaskOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
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
  const [taskDetails, setTaskDetails] = useState<TaskProps>(null);
  const [isModalTaskOpen, setIsModalTaskOpen] = useState(false);
  const [lastPosition, setLastPosition] = useState();

  function createNewTask(title: string, description: string) {
    console.log(title, description);
    const task = {
      title: title,
      position: tasks.length === 0 ? 1 : tasks[tasks.length - 1].position + 1,
      tag: '',
      priority: '',
      date: '',
      description: description,
      checked: false,
    };
    setTasks([...tasks, task]);
  }

  function deleteTask(position) {
    const tempTask = tasks.filter(task => {
      return task.position !== position && task;
    });
    setTasks(tempTask);
  }

  function showTaskDetails(task: TaskProps) {
    setTaskDetails(task);
  }

  function openModal() {
    console.log();
    setIsModalTaskOpen(true);
  }

  function closeModal() {
    setIsModalTaskOpen(false);
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
        getTasksFromLocalStorage,
        isModalTaskOpen,
        openModal,
        closeModal,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
