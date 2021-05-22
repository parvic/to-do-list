import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { motion, AnimateSharedLayout } from 'framer-motion';

import { Card } from '../Card';

import * as S from './style';
import { TaskContext } from '../../context/TaskContext';

export default function CardList() {
  const { tasks, completedTasks, taskFilter } = useContext(TaskContext);

  console.log(taskFilter);
  console.log(completedTasks);

  return (
    <S.Container>
      <AnimateSharedLayout>
        <motion.ul layout>
          {taskFilter === 'completedTasks'
            ? completedTasks
                .slice(0)
                .reverse()
                .map(completedTask => (
                  <Card
                    key={completedTask.position}
                    title={completedTask.title}
                    position={completedTask.position}
                    description={completedTask.description}
                    date={completedTask.date}
                    priority={completedTask.priority}
                    tag={completedTask.tag}
                  />
                ))
            : tasks
                .slice(0)
                .reverse()
                .map(task => {
                  {
                    if (task.priority === taskFilter) {
                      return (
                        <Card
                          key={task.position}
                          title={task.title}
                          position={task.position}
                          description={task.description}
                          date={task.date}
                          priority={task.priority}
                          tag={task.tag}
                        />
                      );
                    }
                    if (taskFilter === 'allTasks') {
                      return (
                        <Card
                          key={task.position}
                          title={task.title}
                          position={task.position}
                          description={task.description}
                          date={task.date}
                          priority={task.priority}
                          tag={task.tag}
                        />
                      );
                    }
                  }
                })}
        </motion.ul>
      </AnimateSharedLayout>
    </S.Container>
  );
}
