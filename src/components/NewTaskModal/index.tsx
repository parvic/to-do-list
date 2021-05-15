import Modal from 'react-modal';
import { Close } from '@material-ui/icons';

import * as S from './style';

Modal.setAppElement('#__next');

interface NewTaskProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTaskModal({ isOpen, onRequestClose }: NewTaskProps) {
  // Set the createNewTask button to open the modal
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <button className="react-modal-close-button" type="button">
          <Close />
        </button>
        <S.Container>
          <h2>Create your Next Task</h2>
          <input type="text" placeholder="Enter a task" />
          <input type="text" placeholder="Write a description" />
          <input placeholder="Select a category" />
          <S.SubmitButton type="submit">Register</S.SubmitButton>
        </S.Container>
      </Modal>
    </>
  );
}
