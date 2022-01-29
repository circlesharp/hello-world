import React from 'react';

interface ModalProps {
  onConfirm: React.MouseEventHandler;
  onCancel: React.MouseEventHandler;
}

const Modal: React.FC<ModalProps> = (props) => {
  return (
    <div className='modal'>
      <p>Are you sure?</p>
      <button className='btn btn-cancel' onClick={props.onCancel}>
        Cancel
      </button>
      <button className='btn btn-confirm' onClick={props.onConfirm}>
        Confirm
      </button>
    </div>
  );
};

export default Modal;
