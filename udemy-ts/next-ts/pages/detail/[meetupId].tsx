import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import MeetupDetailComp from '../../components/meetups/MeetupDetail';
import { Meetup } from '../../models/Meetup';

interface MeetupDetailProps {
  item: Meetup;
}

const MeetupDetail: NextPage<MeetupDetailProps> = (props) => {
  return <MeetupDetailComp item={props.item}></MeetupDetailComp>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          meetupId: '123',
        },
      },
    ],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<MeetupDetailProps> = async (
  context
) => {
  console.log(2444, context);
  const { meetupId } = context!.params!;
  const meetupTest = new Meetup(meetupId as string);

  return {
    props: {
      item: meetupTest.toPlain() as Meetup,
    },
    revalidate: 10,
  };
};

export default MeetupDetail;
