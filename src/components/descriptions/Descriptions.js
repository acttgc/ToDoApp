import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';

import classes from './Descriptions.module.css';
import NewDescriptionForm from './NewDescriptionForm';
import useHttp from '../../hooks/use-http';
import { getAllDescriptions } from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';
import DescriptionsList from './DescriptionsList';

const Descriptions = () => {
  const [isAddingDescription, setIsAddingDescription] = useState(false);
  const params = useParams();

  const { todoId } = params;

  const { sendRequest, status, data: loadedDescriptions } = useHttp(getAllDescriptions);

  useEffect(() => {
    sendRequest(todoId);
  }, [todoId, sendRequest]);

  const startAddDescriptionHandler = () => {
    setIsAddingDescription(true);
  };

  const addedDescriptionHandler = useCallback(() => {
    sendRequest(todoId);
  }, [sendRequest, todoId]);

  let description;

  if (status === 'pending') {
    description = (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    );
  }

  if (status === 'completed' && loadedDescriptions && loadedDescriptions.length > 0) {
    description = <DescriptionsList descriptions={loadedDescriptions} />;
  }

  if (
    status === 'completed' &&
    (!loadedDescriptions || loadedDescriptions.length === 0)
  ) {
    description = <p className='centered'>Nie dodano do tej pory żadnego opisu!</p>;
  }

  return (
    <section className={classes.descriptions}>
      <h2>Opis todo</h2>
      {!isAddingDescription && (
        <button className='btn' onClick={startAddDescriptionHandler}>
          Dodaj opis
        </button>
      )}
      {isAddingDescription && (
        <NewDescriptionForm
        todoId={todoId}
        onAddedDescription={addedDescriptionHandler}
        />
      )}
      {description}
    </section>
  );
};

export default Descriptions;
