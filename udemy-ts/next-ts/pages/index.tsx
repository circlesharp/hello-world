import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { Fragment } from 'react';
import MeetupList from '../components/meetups/MeetupList';
import { Meetup } from '../models/Meetup';
import { getMeetupsCollection } from './api/helpers';

interface HomeProps {
  items: Array<Meetup>;
}

const Home: NextPage<HomeProps> = (props) => {
  return (
    <Fragment>
      <Head>
        <title>TS Next Meetups</title>
        <meta name='description' content='TS Next Meetups, Rongzhao Tan'></meta>
      </Head>
      <MeetupList items={props.items}></MeetupList>;
    </Fragment>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  let meetups: Array<Meetup> = [];
  const { client, collection } = await getMeetupsCollection();
  try {
    meetups = await collection.find<Meetup>({}).toArray();
    meetups.forEach((i) => {
      i._id = i._id?.toString();
    });
  } catch (e) {}

  client.close();

  return {
    props: {
      items: meetups,
    },
    revalidate: 30,
  };
};

// export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
//   const D_MEETUPS = await Array(5)
//   return {
//     props: {
//       items: D_MEETUPS as Meetup[],
//     },
//   };
// };

export default Home;
