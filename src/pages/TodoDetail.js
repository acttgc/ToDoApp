import { Fragment, useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';

import HighlightedTodo from '../components/todos/HighlightedTodo';
import useHttp from '../hooks/use-http';
import { getSingleTodo } from '../lib/api';
import LoadingSpinner from '../components/UI/LoadingSpinner';

const TodoDetail = () => {
  const params = useParams();

  const { todoId } = params;

  const { sendRequest, status, data: loadedTodo, error } = useHttp(
    getSingleTodo,
    true
  );

  useEffect(() => {
    sendRequest(todoId);
  }, [sendRequest, todoId]);

  if (status === 'pending') {
    return (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className='centered'>{error}</p>;
  }

  if (!loadedTodo.text) {
    return <p>Nie znaleziono, żadnego todo!</p>;
  }

  return (
    <Fragment>
      <HighlightedTodo text={loadedTodo.text} author={loadedTodo.author} />
      <Outlet />
    </Fragment>
  );
};

export default TodoDetail;
