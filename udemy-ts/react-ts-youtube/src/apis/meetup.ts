import { title } from 'process';
import { Meetup } from '../models/Meetup';

const BASE_URI =
  'https://udemy-ts-react-meetup-default-rtdb.asia-southeast1.firebasedatabase.app/meetup.json';

export async function addMeetup(meetup: Meetup): Promise<boolean> {
  const config = {
    method: 'POST',
    body: JSON.stringify(meetup),
    Headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const resp = await fetch(BASE_URI, config);
    if (resp.status === 200) {
      // const data: unknown = await resp.json();
      return true;
    }
  } catch (error) {
    console.log(error);
  }

  return false;
}

export async function getMeetups(): Promise<Array<Meetup>> {
  let meetups: Array<Meetup> = [];

  try {
    const resp = await fetch(BASE_URI);
    if (resp.status === 200) {
      const data: any = await resp.json();
      if (data && typeof data === 'object') {
        meetups = Object.keys(data).map((key) => {
          const item = data[key] as Partial<Meetup>;
          return new Meetup(
            item.title,
            item.image,
            item.address,
            item.description
          );
        });
      }
    }
  } catch (error) {}

  return meetups;
}
