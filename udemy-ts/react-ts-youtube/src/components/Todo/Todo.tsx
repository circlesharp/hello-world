import React, { useState } from 'react';
import Backdrop from './Backdrop';
import Modal from './Modal';

import './Todo.less';

export interface TodoProps {
  title: string;
}

const Todo: React.FC<TodoProps> = (props) => {
  const [isShowModal, setIsShowModal] = useState(false);

  const showModal = () => {
    setIsShowModal(true);
  };

  const handleDeleteTodo = () => {
    // TODO: delete logic
    hideModal();
  };

  const hideModal = () => {
    setIsShowModal(false);
  };

  return (
    <div className='card'>
      <h2>{props.title}</h2>
      <div className='actions'>
        <button className='btn' onClick={showModal}>
          Delete
        </button>
      </div>

      {isShowModal && (
        <div>
          <Modal onConfirm={handleDeleteTodo} onCancel={hideModal}></Modal>
          <Backdrop onClick={hideModal}></Backdrop>
        </div>
      )}
    </div>
  );
};

export default Todo;
