import { useRouter } from 'next/router';
import React, { FC, FormEvent, useRef } from 'react';
import httpMeetup from '../../api/meetup';
import { Meetup } from '../../models/Meetup';
import Card from '../ui/Card';
import style from './NewMeetupForm.module.scss';

const NewMeetupForm: FC = () => {
  const router = useRouter();

  const titleInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const addressInputRef = useRef<HTMLInputElement>(null);
  const descInputRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const newMeetup: Meetup = {
      title: titleInputRef.current!.value,
      image: imageInputRef.current!.value,
      address: addressInputRef.current!.value,
      description: descInputRef.current!.value,
    };

    try {
      httpMeetup.addMeetup(newMeetup);
      router.push('/');
    } catch (error) {
      //
    }
  };

  return (
    <Card>
      <form className={style.form} onSubmit={handleSubmit}>
        <div className={style.control}>
          <label htmlFor='title'>Meetup Title</label>
          <input type='text' id='title' required ref={titleInputRef} />
        </div>
        <div className={style.control}>
          <label htmlFor='image'>Meetup Image</label>
          <input type='url' id='image' ref={imageInputRef} />
        </div>
        <div className={style.control}>
          <label htmlFor='address'>Meetup Address</label>
          <input type='text' id='address' ref={addressInputRef} />
        </div>
        <div className={style.control}>
          <label htmlFor='desc'>Description</label>
          <textarea id='desc' rows={5} required ref={descInputRef} />
        </div>

        <div className={style.actions}>
          <button className='btn' type='submit'>
            Add Meetup
          </button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
