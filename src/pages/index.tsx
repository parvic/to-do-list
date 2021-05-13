import Head from 'next/head';

import { TaskProvider } from '../context/TaskContext';
import { Header } from '../components/Header';
import CardList from '../components/CardList';

export default function Home() {
  return (
    <TaskProvider>
      <>
        <Head>
          <title>Home | What to-do</title>
        </Head>

        <Header />
        <CardList />
      </>
    </TaskProvider>
  );
}
