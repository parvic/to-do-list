import React, { useContext, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Checkbox } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import * as S from './style';
import { TaskContext } from '../../context/TaskContext';

interface TaskProps {
  title: string;
  position: number;
  tag: string;
  priority: string;
  date: string;
  description: string;
  checked?: boolean;
}

export function Card({
  title,
  position,
  tag,
  priority,
  date,
  description,
  checked,
}: TaskProps) {
  const {
    deleteTask,
    showTaskDetails,
    storeCompletedTask,
    openTaskDetailsBox,
  } = useContext(TaskContext);

  const [isTaskDone, setIsTaskDone] = useState(false);

  const task = {
    title,
    position: position,
    tag: tag,
    priority: priority,
    date: date,
    description: description,
    checked: checked,
  };

  function handleToggle() {
    setIsTaskDone(!isTaskDone);
  }

  function handleDeleteTask() {
    deleteTask(task.position);
  }

  function handleShowTask() {
    openTaskDetailsBox();
    showTaskDetails(task);
  }

  function handleCompleteTask() {
    setTimeout(() => {
      console.log('handleCompleteTask');

      storeCompletedTask(task);
      handleDeleteTask();
    }, 2300);
  }

  useEffect(() => {
    console.log(isTaskDone);
    if (isTaskDone === true) {
      handleCompleteTask();
    }
  }, [isTaskDone]);

  return (
    <S.Container priority={task.priority}>
      <motion.div
        layout
        transition={{ duration: 0.3 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.99 }}
      >
        <motion.li layout>
          <motion.div className="content">
            <motion.div
              layout
              // initial={{ opacity: 0, scale: 0 }}
              // animate={{ opacity: 1, scale: 1 }}
            >
              <Checkbox
                color="default"
                checked={isTaskDone}
                onChange={handleToggle}
              />
            </motion.div>

            <motion.div className="title" layout onClick={handleShowTask}>
              <p>{task.title}</p>
            </motion.div>

            <motion.div className="functions" layout>
              <button type="button" onClick={handleDeleteTask}>
                <DeleteIcon />
              </button>
            </motion.div>
          </motion.div>

          {/* <AnimatePresence>
          {isOpen && <Content description={description} />}
        </AnimatePresence> */}
        </motion.li>
        {isTaskDone && (
          <motion.div
            initial={{ borderBottom: '2px solid #67ec1a', width: '0%' }}
            animate={{ borderBottom: '2px solid #67ec1a', width: '100%' }}
            transition={{ duration: 2, ease: 'easeOut' }}
          />
        )}
      </motion.div>
    </S.Container>
  );
}
