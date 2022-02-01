import type { GetStaticProps, NextPage } from 'next';
import MeetupList from '../components/meetups/MeetupList';
import { Meetup } from '../models/Meetup';
import { getMeetupsCollection } from './api/helpers';

interface HomeProps {
  items: Array<Meetup>;
}

const Home: NextPage<HomeProps> = (props) => {
  return <MeetupList items={props.items}></MeetupList>;
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
    revalidate: 10,
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
