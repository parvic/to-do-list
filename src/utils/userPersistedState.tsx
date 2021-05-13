import Cookies from 'js-cookie';

interface TaskProps {
  title: string;
  position: number;
  description: string;
  checked?: boolean;
}

export function storeTasks(tasks: TaskProps[]) {
  // Cookies.set('tasks', JSON.stringify(tasks));
  localStorage.setItem('@task-list:tasks', JSON.stringify(tasks));
}

export function getTasksFromLocalStorage() {
  const storagedTasks = localStorage.getItem('@task-list:tasks');
  if (storagedTasks) {
    return JSON.parse(storagedTasks);
  } else {
    return [];
  }
}
