import { NextApiRequest, NextApiResponse } from 'next';
import { getMeetupsCollection } from './helpers';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method?.toUpperCase() !== 'POST') {
    return;
  }

  const { collection, client } = await getMeetupsCollection();
  try {
    await collection.insertOne(req.body);
    res.status(201).json({
      message: 'Meetup inserted!',
    });
  } catch (error) {
    res.status(500).json(error);
  }

  client.close();
};

export default handler;
