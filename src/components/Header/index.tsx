import { Menu, Search } from '@material-ui/icons/';

import * as S from './style';

export function Header() {
  return (
    <S.Container>
      <div>
        <button type="button">
          <Menu />
        </button>

        <button type="button">
          <Search />
        </button>
      </div>
    </S.Container>
  );
}
