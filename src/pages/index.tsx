import Head from 'next/head';
import { useContext, useState } from 'react';
import { Add } from '@material-ui/icons';

import { Header } from 'components/Header';
import CardList from 'components/CardList';
import { NewTaskModal } from 'components/NewTaskModal';
import { TaskContext } from 'context/TaskContext';
import { UserInfo } from 'components/UserInfo';
import { TaskDetailed } from 'components/TaskDetailed';

import * as S from 'styles/pages/home';

export default function Home() {
  const [isModalTaskOpen, setIsModalTaskOpen] = useState(false);

  const { isTaskDetailShown } = useContext(TaskContext);

  function openModal() {
    setIsModalTaskOpen(true);
  }

  function closeModal() {
    setIsModalTaskOpen(false);
  }

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
            {isTaskDetailShown && (
              <section className="task-details">
                <TaskDetailed />
              </section>
            )}
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
