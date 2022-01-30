import React from 'react';
import { useNavigate } from 'react-router-dom';
import { addMeetup } from '../apis/meetup';
import NewMeetupForm from '../components/meetups/NewMeetupForm';
import { Meetup } from '../models/Meetup';

const NewMeetups: React.FC = () => {
  const navigate = useNavigate();

  const handleAddMeetup = async (newMeetup: Meetup) => {
    if (await addMeetup(newMeetup)) navigate('/', { replace: true });
  };

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={handleAddMeetup}></NewMeetupForm>
    </section>
  );
};

export default NewMeetups;
