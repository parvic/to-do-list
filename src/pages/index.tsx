import Head from 'next/head';
import { useContext, useState } from 'react';

import { Header } from 'components/Header';
import CardList from 'components/CardList';
import { NewTaskModal } from 'components/NewTaskModal';
import { TaskContext } from 'context/TaskContext';
import { Add } from '@material-ui/icons';

import * as S from './home';

export default function Home() {
  const { isModalTaskOpen, openModal, closeModal } = useContext(TaskContext);

  return (
    <>
      <Head>
        <title>Home | What to-do</title>
      </Head>

      <NewTaskModal isOpen={isModalTaskOpen} onRequestClose={closeModal} />

      <S.Container>
        <Header />

        <S.MainContent>
          <section>
            <CardList openModal={openModal} />
          </section>
          <section className="calendar"></section>
        </S.MainContent>

        <S.Footer>
          <button type="button" onClick={openModal}>
            <Add />
          </button>
        </S.Footer>
      </S.Container>
    </>
  );
}
