import { FormEvent, useContext, useEffect, useState } from 'react';
import Modal from 'react-modal';
import Select from 'react-select';
import { Close } from '@material-ui/icons';

import * as S from './style';
import { TaskContext } from 'context/TaskContext';
import { settings } from 'cluster';

Modal.setAppElement('#__next');

interface NewTaskProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTaskModal({ isOpen, onRequestClose }: NewTaskProps) {
  const [inputError, setInputError] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('priorityLow');

  const { createNewTask } = useContext(TaskContext);

  const priorityOptions = [
    { value: 'priorityLow', label: 'Low' },
    { value: 'priorityMedium', label: 'Medium' },
    { value: 'priorityHigh', label: 'High' },
  ];

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    if (!title || !description) {
      setInputError('Please, fill in the red fields');
      return;
    } else {
      createNewTask(title, description, priority);

      setTitle('');
      setDescription('');
      setPriority('priorityLow');
      onRequestClose();
    }
  }

  function handleSelectPriority(prioritySelected: {
    value: string;
    label: string;
  }) {
    setPriority(prioritySelected.value);
  }

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

      <S.Container hasError={!!inputError} onSubmit={handleCreateNewTask}>
        <h2>Create your Next Task</h2>

        {inputError && <S.Error>{inputError}</S.Error>}
        <input
          type="text"
          value={title}
          onChange={event => setTitle(event.target.value)}
          placeholder="Enter a task"
        />

        <Select
          className="react-select-container"
          classNamePrefix="react-select"
          defaultValue={priorityOptions[0]}
          options={priorityOptions}
          onChange={handleSelectPriority}
        />

        <input
          type="text"
          value={description}
          onChange={event => setDescription(event.target.value)}
          placeholder="Write a description"
        />

        <S.SubmitButton type="submit">Register</S.SubmitButton>
      </S.Container>
    </Modal>
  );
}
