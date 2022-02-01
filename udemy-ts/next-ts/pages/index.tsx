import type { GetServerSideProps, GetStaticProps, NextPage } from 'next';
import MeetupList from '../components/meetups/MeetupList';
import { Meetup } from '../models/Meetup';

interface HomeProps {
  items: Array<Meetup>;
}

const Home: NextPage<HomeProps> = (props) => {
  return <MeetupList items={props.items}></MeetupList>;
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const D_MEETUPS = await Array(5)
    .fill(null)
    .map((i) => new Meetup().toPlain());

  return {
    props: {
      items: D_MEETUPS as Meetup[],
    },
    revalidate: 10,
  };
};

// export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
//   const D_MEETUPS = await Array(5)
//     .fill(null)
//     .map((i) => new Meetup().toPlain());
//   return {
//     props: {
//       items: D_MEETUPS as Meetup[],
//     },
//   };
// };

export default Home;
