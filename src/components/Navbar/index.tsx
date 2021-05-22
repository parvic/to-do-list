import { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, Search, Close } from '@material-ui/icons/';
import { useMediaQuery } from 'react-responsive';

import * as S from './style';
import theme from '../../styles/theme/light';
import { TaskContext } from 'context/TaskContext';

interface TaskProps {
  updateTaskFilter: (filter: string) => void;
}

export function Navbar() {
  const { updateTaskFilter } = useContext(TaskContext);

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const smallScreen = useMediaQuery({
    query: `(max-width: ${theme.screenSize.tablet})`,
  });
  const bigScreen = useMediaQuery({
    query: `(min-width: ${theme.screenSize.tablet})`,
  });

  function handleNavbarToggle() {
    console.log(bigScreen);
    setIsNavbarOpen(!isNavbarOpen);
  }

  return (
    <S.Container
      initial={{
        // height: !bigScreen && (isNavbarOpen ? 'auto' : '5rem'),
        height: bigScreen ? '100%' : isNavbarOpen ? '50%' : '5rem',
        width: bigScreen ? (isNavbarOpen ? '15rem' : '5rem') : '100%',
      }}
      animate={{
        // height: !bigScreen && (isNavbarOpen ? 'auto' : '5rem'),
        height: bigScreen ? '100%' : isNavbarOpen ? '50%' : '5rem',
        width: bigScreen ? (isNavbarOpen ? '15rem' : '5rem') : '100%',
      }}
    >
      <div>
        <button
          className="menu-button"
          type="button"
          onClick={handleNavbarToggle}
        >
          {isNavbarOpen ? <Close /> : <Menu />}
        </button>

        {isNavbarOpen && <TaskFilterMenu updateTaskFilter={updateTaskFilter} />}
      </div>
    </S.Container>
  );
}

function TaskFilterMenu({ updateTaskFilter }: TaskProps) {
  function handleShowAllTasks() {
    updateTaskFilter('allTasks');
  }

  function handleFilterCompletedTasks() {
    updateTaskFilter('completedTasks');
  }

  function handleFilterLowPriorityTasks() {
    updateTaskFilter('priorityLow');
  }

  function handleFilterMediumPriorityTasks() {
    updateTaskFilter('priorityMedium');
  }

  function handleFilterHighPriorityTasks() {
    updateTaskFilter('priorityHigh');
  }

  return (
    <div id="task-filter-menu">
      <motion.button
        whileHover={{ filter: 'brightness(85%)' }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
        initial={{
          opacity: '0',
          transform: 'translateY(50px) scale(0) translateZ(0px)',
        }}
        animate={{
          opacity: '1',
          transform: 'translateY(0px) scale(1) translateZ(0px)',
        }}
        onClick={handleShowAllTasks}
      >
        All Tasks
      </motion.button>

      <p>Filter tasks by:</p>
      <motion.button
        whileHover={{ filter: 'brightness(85%)' }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
        initial={{
          opacity: '0',
          transform: 'translateY(50px) scale(0) translateZ(0px)',
        }}
        animate={{
          opacity: '1',
          transform: 'translateY(0px) scale(1) translateZ(0px)',
        }}
        onClick={handleFilterCompletedTasks}
      >
        Completion
      </motion.button>

      <motion.button
        whileHover={{ filter: 'brightness(85%)' }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.4 }}
        initial={{
          opacity: '0',
          transform: 'translateY(50px) scale(0) translateZ(0px)',
        }}
        animate={{
          opacity: '1',
          transform: 'translateY(0px) scale(1) translateZ(0px)',
        }}
        onClick={handleFilterLowPriorityTasks}
      >
        Low Priority
      </motion.button>

      <motion.button
        whileHover={{ filter: 'brightness(85%)' }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.5 }}
        initial={{
          opacity: '0',
          transform: 'translateY(50px) scale(0) translateZ(0px)',
        }}
        animate={{
          opacity: '1',
          transform: 'translateY(0px) scale(1) translateZ(0px)',
        }}
        onClick={handleFilterMediumPriorityTasks}
      >
        Medium Priority
      </motion.button>

      <motion.button
        whileHover={{ filter: 'brightness(85%)' }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.6 }}
        initial={{
          opacity: '0',
          transform: 'translateY(50px) scale(0) translateZ(0px)',
        }}
        animate={{
          opacity: '1',
          transform: 'translateY(0px) scale(1) translateZ(0px)',
        }}
        onClick={handleFilterHighPriorityTasks}
      >
        High Priority
      </motion.button>
    </div>
  );
}
