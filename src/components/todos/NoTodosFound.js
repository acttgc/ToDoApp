import { Link } from 'react-router-dom';

import classes from './NoTodosFound.module.css';

const NoTodosFound = () => {
  return (
    <div className={classes.notodos}>
      <p>Nie znaleziono żadnego todo</p>
      <Link className='btn' to='/new-todo'>
        Dodaj todo
      </Link>
    </div>
  );
};

export default NoTodosFound;
