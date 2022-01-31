import type { NextPage } from 'next';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import { Meetup } from '../../models/Meetup';

const NewMeetup: NextPage = () => {
  const onAddMeetup = (item: Meetup) => {
    console.log(item);
  };

  return <NewMeetupForm onAddMeetup={onAddMeetup}></NewMeetupForm>;
};

export default NewMeetup;
