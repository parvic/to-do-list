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
  description: string;
  color: string;
  done?: boolean;
}

export function Card({ title, position, description, color }: TaskProps) {
  const { deleteTask } = useContext(TaskContext);

  const [done, setDone] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setDone(!done);
  }

  function handleDeleteTask() {
    deleteTask(position);
  }

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <S.Container>
      <motion.li
        layout
        // initial={{ borderRadius: 4 }}
        // style={{ background: `#${color}` }}
      >
        <motion.div className="content">
          <motion.div className="priority" />

          <motion.div layout>
            <Checkbox color="default" checked={done} onChange={handleToggle} />
          </motion.div>

          <motion.div className="title" layout onClick={toggleOpen}>
            <p>{title}</p>
          </motion.div>

          <motion.div className="functions" layout>
            <button type="button" onClick={handleDeleteTask}>
              <DeleteIcon />
            </button>
          </motion.div>
        </motion.div>

        <AnimatePresence>
          {isOpen && <Content description={description} />}
        </AnimatePresence>
      </motion.li>
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
