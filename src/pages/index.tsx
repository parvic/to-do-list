import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { List } from '../components/List';
import { TaskProvider } from '../context/TaskContext';
import CardList from '../components/CardList';

export default function Home() {
  return (
    <TaskProvider>
      <>
        <Head>
          <title>Home | What to-do</title>
        </Head>

        <CardList />
      </>
    </TaskProvider>
  );
}
