import { useRef, useEffect } from 'react';

import useHttp from '../../hooks/use-http';
import { addDescription } from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './NewDescriptionForm.module.css';

const NewDescriptionForm = (props) => {
  const descriptionTextRef = useRef();

  const { sendRequest, status, error } = useHttp(addDescription);

  const { onAddedDescription } = props;

  useEffect(() => {
    if (status === 'completed' && !error) {
      onAddedDescription();
    }
  }, [status, error, onAddedDescription]);

  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredText = descriptionTextRef.current.value;

    sendRequest({ descriptionData: { text: enteredText }, todoId: props.todoId });
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {status === 'pending' && (
        <div className='centered'>
          <LoadingSpinner />
        </div>
      )}
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor='description'>Twój opis</label>
        <textarea id='description' rows='5' ref={descriptionTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className='btn'>Dodaj opis</button>
      </div>
    </form>
  );
};

export default NewDescriptionForm;
