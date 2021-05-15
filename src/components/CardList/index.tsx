import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { motion, AnimateSharedLayout } from 'framer-motion';
import { Add } from '@material-ui/icons';

import { Card } from '../Card';

import * as S from './style';
import { TaskContext } from '../../context/TaskContext';

interface CardListProps {
  openModal: () => void;
}

export default function CardList({ openModal }: CardListProps) {
  const { tasks, createNewTask, getTasksFromLocalStorage } = useContext(
    TaskContext,
  );

  useEffect(() => {}, [tasks]);

  return (
    <S.Container>
      <AnimateSharedLayout>
        <motion.ul layout>
          {tasks.map(task => {
            console.log(task);
            return (
              <Card
                key={task.position}
                title={task.title}
                position={task.position}
                description={task.description}
                //color={colors[tasks.indexOf(task)]}
                color="ff0040"
              />
            );
          })}
        </motion.ul>
        <S.Footer>
          <button type="button" onClick={openModal}>
            <Add />
          </button>
        </S.Footer>
      </AnimateSharedLayout>
    </S.Container>
  );
}
