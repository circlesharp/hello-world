import { Collection, MongoClient, Db } from 'mongodb';

export async function getMeetupsCollection(): Promise<{
  collection: Collection;
  client: MongoClient;
}> {
  const client = await MongoClient.connect(
    'mongodb+srv://trz:codemao666@cluster0.lo3jn.mongodb.net/meetups?retryWrites=true&w=majority'
  );
  const db: Db = client.db(); // 一个叫 meetups 的 database
  const collection = db.collection('meetups'); // 一个叫 meetups 的 collection

  return { collection, client };
}
