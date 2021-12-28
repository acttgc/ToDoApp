import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import TodoForm from '../components/todos/TodoForm';
import useHttp from '../hooks/use-http';
import { addTodo } from '../lib/api';

const NewTodo = () => {
  const { sendRequest, status } = useHttp(addTodo);
  const navigate = useNavigate();

  useEffect(() => {
    if (status === 'completed') {
      navigate('/todo');
    }
  }, [status, navigate]);

  const addTodoHandler = (todoData) => {
    sendRequest(todoData);
  };

  return <TodoForm isLoading={status === 'pending'} onAddTodo={addTodoHandler} />;
};

export default NewTodo;
