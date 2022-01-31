import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import MeetupDetailComp from '../../components/meetups/MeetupDetail';
import { Meetup } from '../../models/Meetup';

const MeetupDetail: NextPage = () => {
  const router = useRouter();
  const meetupTest = new Meetup(router.query.meetupId as string);

  return <MeetupDetailComp item={meetupTest}></MeetupDetailComp>;
};

export default MeetupDetail;
