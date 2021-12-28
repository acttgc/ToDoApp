import { useEffect } from 'react';

import LoadingSpinner from '../components/UI/LoadingSpinner';
import useHttp from '../hooks/use-http';
import { getAllTodos } from '../lib/api';
import TodoList from '../components/todos/TodoList';
import NoTodosFound from '../components/todos/NoTodosFound';

const AllTodos = () => {
  const { sendRequest, status, data: loadedTodos, error } = useHttp(
    getAllTodos,
    true
  );

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === 'pending') {
    return (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className='centered focused'>{error}</p>;
  }

  if (status === 'completed' && (!loadedTodos || loadedTodos.length === 0)) {
    return <NoTodosFound />;
  }

  return <TodoList todos={loadedTodos} />;
};

export default AllTodos;
