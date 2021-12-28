import { Link } from 'react-router-dom';

import classes from './TodoItem.module.css';

const TodoItem = (props) => {
  return (
    <li className={classes.item}>
      <figure>
        <blocktodo>
          <p>{props.text}</p>
        </blocktodo>
        <figcaption>{props.author}</figcaption>
      </figure>
      <Link className='btn' to={`/todo/${props.id}`}>
        Pełny ekran
      </Link>
    </li>
  );
};

export default TodoItem;
