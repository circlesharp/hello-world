import type { NextPage } from 'next';
import MeetupList from '../components/meetups/MeetupList';
import { Meetup } from '../models/Meetup';

const D_MEETUPS = Array(5)
  .fill(null)
  .map((i) => new Meetup());

const Home: NextPage = () => {
  return <MeetupList items={D_MEETUPS}></MeetupList>;
};

export default Home;
