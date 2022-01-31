import type { NextPage } from 'next';
import Image from 'next/image';
import { Meetup } from '../../models/Meetup';
import style from './MeetupDetail.module.scss';

const MeetupDetailComp: NextPage<{ item: Meetup }> = (props) => {
  return (
    <section className={style.detail}>
      <Image
        src={props.item.image}
        alt={props.item.title}
        width={160}
        height={160}
      ></Image>
      <h1>{props.item.id}</h1>
      <address>{props.item.address}</address>
      <p>{props.item.description}</p>
    </section>
  );
};

export default MeetupDetailComp;
