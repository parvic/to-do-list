import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';

import { Card } from '../Card';

import * as S from './style';
import { TaskContext } from '../../context/TaskContext';

export default function CardList() {
  const { tasks, createNewTask } = useContext(TaskContext);
  const [color, setColor] = useState('ff0040');
  const [colors, setColors] = useState<string[]>(['ff0040']);

  function incrementeCardColor() {
    var hexStr = (parseInt(color, 16) + parseInt('000005', 16)).toString(16);
    while (hexStr.length < 6) {
      hexStr = '0' + hexStr;
    }
    return hexStr;
  }

  function implementColorArray() {
    tasks.forEach(task => {
      console.log('#' + color);
      setColors([...colors, color]);
      setColor(incrementeCardColor());
    });
  }

  useEffect(() => {
    implementColorArray();
  }, [tasks]);

  return (
    <S.Container>
      <AnimateSharedLayout>
        <motion.ul layout initial={{ borderRadius: 25 }}>
          {tasks.map(task => {
            return (
              <Card
                key={task.position}
                title={task.title}
                position={task.position}
                description={task.description}
                color={colors[tasks.indexOf(task)]}
              />
            );
          })}
        </motion.ul>
      </AnimateSharedLayout>
      <button type="button" onClick={createNewTask}>
        Add Task
      </button>
    </S.Container>
  );
}
