import React from 'react';
import { Meetup } from '../../models/Meetup';
import Card from '../ui/Card';
import Image from 'next/image';

import style from './MeetupItem.module.scss';
import { useRouter } from 'next/router';

const MeetupItem: React.FC<{ item: Meetup }> = (props) => {
  const router = useRouter();

  const toDetailPage = () => {
    router.push(`/detail/${props.item.id}`);
  };

  return (
    <li className={style.item}>
      <Card>
        <div className={style.image}>
          <Image
            src={props.item.image}
            alt={props.item.title}
            width={160}
            height={160}
          ></Image>
        </div>

        <div className={style.content}>
          <h3>{props.item.title}</h3>
          <address>{props.item.address}</address>
          <p>{props.item.description}</p>
        </div>

        <div className={style.actions}>
          <button className='btn' onClick={toDetailPage}>
            Show Details
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
