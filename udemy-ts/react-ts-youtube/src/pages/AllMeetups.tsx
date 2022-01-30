import React, { useState, useEffect } from 'react';
import { getMeetups } from '../apis/meetup';
import MeetupList from '../components/meetups/MeetupList';
import { Meetup } from '../models/Meetup';

const AllMeetupsPage: React.FC = () => {
  const [meetups, setMeetups] = useState<Array<Meetup>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    getMeetups().then((meetups) => {
      setIsLoading(false);
      setMeetups(meetups);
    });
  }, []);

  return (
    <section>
      <h1>All Meetups</h1>
      {isLoading ? <p>Loading</p> : <MeetupList items={meetups} />}
    </section>
  );
};

export default AllMeetupsPage;
