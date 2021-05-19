import React, { useContext } from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
}: TaskProps) {
  const { deleteTask, showTaskDetails } = useContext(TaskContext);

  const [done, setDone] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setDone(!done);
  }

  function handleDeleteTask() {
    deleteTask(position);
  }

  function handleShowTask() {
    showTaskDetails({ title, tag, date, description, position, priority });
  }

  const toggleOpen = () => setIsOpen(!isOpen);
  const intialStyles = {
    borderBottom: '2px solid #67ec1a',
    // backgroundColor: 'green',
    width: '0%',
  };

  const endingStyles = {
    borderBottom: '2px solid #67ec1a',
    // backgroundColor: 'green',
    width: '100%',
  };

  const transition = { duration: 2, ease: 'easeOut' };

  return (
    <S.Container priority={priority}>
      <motion.li
        layout
        // initial={{ opacity: 0, scale: 0 }}
        // animate={{ opacity: 1, scale: 1 }}
      >
        <motion.div className="content">
          {/* <motion.div className={`priority ${priority}`} /> */}

          <motion.div layout>
            <Checkbox color="default" checked={done} onChange={handleToggle} />
          </motion.div>

          <motion.div className="title" layout onClick={handleShowTask}>
            <p>{title}</p>
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
      {done && (
        <motion.div
          initial={intialStyles}
          animate={endingStyles}
          transition={transition}
        />
      )}
    </S.Container>
  );
}

interface DescriptionProps {
  description: String;
}

function Content({ description }: DescriptionProps) {
  return (
    <motion.div
      className="description"
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <span>{description}</span>
    </motion.div>
  );
}
