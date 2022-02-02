import type { NextPage } from 'next';
import Head from 'next/head';
import { Fragment } from 'react';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewMeetup: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Add a New Meetup</title>
        <meta
          name='description'
          content='Add your own meetups and create great content'
        ></meta>
      </Head>
      <NewMeetupForm></NewMeetupForm>;
    </Fragment>
  );
};

export default NewMeetup;
