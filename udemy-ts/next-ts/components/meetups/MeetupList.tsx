import React from 'react';

import style from './MeetupList.module.scss';
import { Meetup } from '../../models/Meetup';
import MeetupItem from './MeetupItem';

const MeetupList: React.FC<{ items: Array<Meetup> }> = (props) => {
  return (
    <ul className={style.list}>
      {props.items.map((item) => (
        <MeetupItem item={item} key={item._id} />
      ))}
    </ul>
  );
};

export default MeetupList;
