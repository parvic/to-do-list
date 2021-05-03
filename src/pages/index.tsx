import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Todo } from '../components/Todo';
import { Description } from '../components/Todo/style';

interface TaskProps {
  title: string;
  description: string;
}
export default function Home() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  function addTask() {
    const task = {
      title: 'Task',
      description: 'description',
    };
    setTasks([...tasks, task]);
  }

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  return (
    <>
      <Head>
        <title>Home | What to-do</title>
      </Head>

      {tasks.map(task => {
        console.log(tasks);
        return <Todo title={task.title} description={task.description} />;
      })}

      <button type="button" onClick={addTask}>
        Add Task
      </button>
    </>
  );
}
