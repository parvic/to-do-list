import Cookies from 'js-cookie';

interface TaskProps {
  title: string;
  position: number;
  description: string;
  checked?: boolean;
}

export function storeTasks(tasks: TaskProps[]) {
  Cookies.set('tasks', JSON.stringify(tasks));
}
