import React from 'react';

import style from './Card.module.less';

const Card: React.FC = (props) => {
  return <div className={style.card}>{props.children}</div>;
};

export default Card;
