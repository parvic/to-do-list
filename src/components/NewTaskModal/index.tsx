import Modal from 'react-modal';

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
        // overlayClassName="react-modal-overlay"
        // className="react-modal-content"
      >
        <S.Container>
          <h2>Create your Next Task</h2>
          <input type="text" placeholder="Enter a task" />
          <input type="text" placeholder="Write a description" />
          <input placeholder="Select a category" />
          <button type="submit">Register</button>
        </S.Container>
      </Modal>
    </>
  );
}
