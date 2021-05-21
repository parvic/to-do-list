import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, Search, Close } from '@material-ui/icons/';
import { useMediaQuery } from 'react-responsive';

import * as S from './style';
import theme from '../../styles/theme/light';

export function Navbar() {
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

        {isNavbarOpen && <TaskFilterMenu />}
      </div>
    </S.Container>
  );
}

function TaskFilterMenu() {
  return (
    <div id="task-filter-menu">
      <p>Tasks by:</p>
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
      >
        High Priority
      </motion.button>
    </div>
  );
}
