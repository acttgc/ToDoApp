import classes from './HighlightedTodo.module.css';

const HighlightedTodo = (props) => {
  return (
    <figure className={classes.todo}>
      <p>{props.text}</p>
      <figcaption>{props.author}</figcaption>
    </figure>
  );
};

export default HighlightedTodo;
