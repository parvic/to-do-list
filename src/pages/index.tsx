import Head from 'next/head';
import { useContext, useState } from 'react';

import { Header } from 'components/Header';
import CardList from 'components/CardList';
import { NewTaskModal } from 'components/NewTaskModal';
import { TaskContext } from 'context/TaskContext';

export default function Home() {
  const { isModalTaskOpen, openModal, closeModal } = useContext(TaskContext);

  return (
    <>
      <Head>
        <title>Home | What to-do</title>
      </Head>

      <NewTaskModal isOpen={isModalTaskOpen} onRequestClose={closeModal} />
      <Header />
      <CardList openModal={openModal} />
    </>
  );
}
