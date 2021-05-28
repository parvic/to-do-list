import { useState } from 'react';
import { motion } from 'framer-motion';

import * as S from './style';

export function SideMenu() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <S.SideMenuContainer>
      <motion.header>
        <img src="" alt="" />
      </motion.header>
      <motion.main>
        <motion.button>
          <img src="" alt="" />
          {isExpanded && (
            <motion.div>
              <span>Text</span>
              <span>00</span>
            </motion.div>
          )}
        </motion.button>

        <motion.button>
          <img src="" alt="" />
          {isExpanded && (
            <motion.div>
              <span>Text</span>
              <span>00</span>
            </motion.div>
          )}
        </motion.button>

        <motion.button>
          <img src="" alt="" />
          {isExpanded && (
            <motion.div>
              <span>Text</span>
              <span>00</span>
            </motion.div>
          )}
        </motion.button>

        <motion.button>
          <img src="" alt="" />
          {isExpanded && (
            <motion.div>
              <span>Text</span>
              <span>00</span>
            </motion.div>
          )}
        </motion.button>
      </motion.main>
      <motion.footer></motion.footer>
    </S.SideMenuContainer>
  );
}
