import { Fragment } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import TodoItem from './TodoItem';
import classes from './TodoList.module.css';

const sortTodos = (todos, ascending) => {
  return todos.sort((todoA, todoB) => {
    if (ascending) {
      return todoA.id > todoB.id ? 1 : -1;
    } else {
      return todoA.id < todoB.id ? 1 : -1;
    }
  });
};

const TodoList = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const isSortingAscending = queryParams.get('sort') === 'asc';
  console.log(isSortingAscending)

  const sortedTodos = sortTodos(props.todos, isSortingAscending);

  const changeSortingHandler = () => {
    navigate(location.pathname, {
      search: `?sort=${isSortingAscending ? 'desc' : 'asc'}`,
      });
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sortuj {isSortingAscending ? 'malejąco' : 'rosnąco'}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            author={todo.author}
            text={todo.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default TodoList;
