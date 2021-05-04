import Head from 'next/head';

import { List } from '../components/List';
export default function Home() {
  return (
    <>
      <Head>
        <title>Home | What to-do</title>
      </Head>

      <List />
    </>
  );
}
