import React, { FC, FormEvent, useRef } from 'react';
import { Meetup } from '../../models/Meetup';
import Card from '../ui/Card';
import style from './NewMeetupForm.module.less';

interface NewMeetupFormProps {
  onAddMeetup: (newMeetup: Meetup) => void;
}

const NewMeetupForm: FC<NewMeetupFormProps> = (props) => {
  const titleInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const addressInputRef = useRef<HTMLInputElement>(null);
  const descInputRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const newMeetup = new Meetup(
      titleInputRef.current!.value,
      imageInputRef.current!.value,
      addressInputRef.current!.value,
      descInputRef.current!.value
    );

    props.onAddMeetup(newMeetup);
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
