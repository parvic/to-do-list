import Head from 'next/head';
import { useContext, useState } from 'react';
import { Add } from '@material-ui/icons';

import { Header } from 'components/Header';
import CardList from 'components/CardList';
import { NewTaskModal } from 'components/NewTaskModal';
import { TaskContext } from 'context/TaskContext';

import * as S from 'styles/home';
import { UserInfo } from 'components/UserInfo';

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
          <UserInfo />
          <S.TasksSection>
            <section>
              <CardList openModal={openModal} />
            </section>
            <section className="calendar"></section>
          </S.TasksSection>
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
