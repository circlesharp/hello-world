import React from 'react';

const Backdrop: React.FC<{ onClick: React.MouseEventHandler }> = (props) => {
  return <div className='backdrop' onClick={props.onClick}></div>;
};

export default Backdrop;
