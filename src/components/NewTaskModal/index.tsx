import { FormEvent, useContext, useEffect, useState } from 'react';
import Modal from 'react-modal';
import { Close } from '@material-ui/icons';

import * as S from './style';
import { TaskContext } from 'context/TaskContext';

Modal.setAppElement('#__next');

interface NewTaskProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTaskModal({ isOpen, onRequestClose }: NewTaskProps) {
  const [title, setTitle] = useState('');
  const { createNewTask } = useContext(TaskContext);

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    createNewTask();
  }

  useEffect(() => {
    console.log(title);
  }, [title]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        className="react-modal-close-button"
        type="button"
        onClick={onRequestClose}
      >
        <Close />
      </button>

      <S.Container onSubmit={handleCreateNewTask}>
        <h2>Create your Next Task</h2>

        <input
          type="text"
          value={title}
          onChange={event => setTitle(event.target.value)}
          placeholder="Enter a task"
        />
        <input type="text" placeholder="Write a description" />
        <input placeholder="Select a category" />

        <S.SubmitButton type="submit">Register</S.SubmitButton>
      </S.Container>
    </Modal>
  );
}
