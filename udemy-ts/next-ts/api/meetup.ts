import { Meetup } from '../models/Meetup';

class HttpMeetup {
  private BASE_URI = '/api';

  async addMeetup(meetup: Meetup): Promise<boolean> {
    try {
      const resp = await fetch(`${this.BASE_URI}/new-meetup`, {
        method: 'POST',
        body: JSON.stringify(meetup),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      await resp.json();

      return true;
    } catch (error) {
      alert(error);
      return false;
    }
  }

  // async getMeetups(): Promise<Array<Meetup>> {
  //   let meetups = [];

  //   try {
  //     const resp = await fetch(`${this.BASE_URI}/meetups`, {
  //       method: 'get',
  //     });
  //     const data = await resp.json();
  //     if (Array.isArray(data)) {
  //       meetups = data;
  //     }
  //   } catch (error) {}

  //   return meetups;
  // }
}

export const httpMeetup = new HttpMeetup();

export default httpMeetup;
