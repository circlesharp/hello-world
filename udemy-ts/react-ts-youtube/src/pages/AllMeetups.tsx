import React from 'react';
import MeetupList from '../components/meetups/MeetupList';
import { Meetup } from '../models/Meetup';

const DUMMY_DATA: Array<Meetup> = Array(4)
  .fill(0)
  .map((_) => new Meetup());

const AllMeetupsPage: React.FC = () => {
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList items={DUMMY_DATA} />
    </section>
  );
};

export default AllMeetupsPage;
