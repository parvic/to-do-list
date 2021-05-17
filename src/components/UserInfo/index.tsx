import * as S from './style';

export function UserInfo() {
  return (
    <S.Container>
      <div className="user-content">
        <img
          src="https://avatars.githubusercontent.com/u/66752969?v=4"
          alt="avatar"
        />

        <div className="user-text-info">
          <h3>Victor </h3>
          <p>Parente</p>
        </div>
      </div>
      <div className="task-counter">
        <p>Completed Tasks</p>
        <span>00</span>
      </div>
    </S.Container>
  );
}
