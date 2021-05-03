import { Checkbox } from '@material-ui/core';
import { useState } from 'react';
import * as S from './style';

interface TodoProps {
  title: string;
  description: string;
  // done: boolean;
}

export function Todo({ title, description }: TodoProps) {
  const [done, setDone] = useState(false);

  function handleToggle() {
    setDone(!done);
  }

  return (
    <S.Container>
      <S.Main>
        <Checkbox color="default" checked={done} onChange={handleToggle} />

        <S.Description>
          <p>{title}</p>
          <span>{description}</span>
        </S.Description>
        <button type="button">Delete</button>
      </S.Main>
    </S.Container>
  );
}
