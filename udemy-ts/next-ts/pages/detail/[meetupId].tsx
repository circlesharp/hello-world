import { ObjectId } from 'mongodb';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { Fragment } from 'react';
import MeetupDetailComp from '../../components/meetups/MeetupDetail';
import { Meetup } from '../../models/Meetup';
import { getMeetupsCollection } from '../api/helpers';

interface MeetupDetailProps {
  item: Meetup;
}

const MeetupDetail: NextPage<MeetupDetailProps> = (props) => {
  return (
    <Fragment>
      <Head>
        <title>{props.item.title}</title>
        <meta name='description' content={props.item.description}></meta>
      </Head>
      <MeetupDetailComp item={props.item}></MeetupDetailComp>;
    </Fragment>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: Array<{ params: { meetupId: string } }> = [];
  const { client, collection } = await getMeetupsCollection();
  try {
    const objectIds = await collection
      .find<{ _id: ObjectId }>({}, { projection: { _id: 1 } })
      .toArray();
    paths = objectIds.map((i) => ({
      params: {
        meetupId: i._id.toString(),
      },
    }));
  } catch (e) {}

  client.close();

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<MeetupDetailProps> = async (
  context
) => {
  const { meetupId } = context!.params!;
  const { client, collection } = await getMeetupsCollection();
  let item!: Meetup;

  try {
    const resp = await collection.findOne<Meetup>({
      _id: new ObjectId(meetupId as string),
    });

    if (resp) {
      item = resp;
      item._id = resp?._id?.toString();
    }
  } catch (e) {}

  client.close();

  return {
    props: {
      item,
    },
    revalidate: 10,
  };
};

export default MeetupDetail;
