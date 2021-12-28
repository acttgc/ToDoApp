import DescriptionItem from './DescriptionItem';
import classes from './DescriptionsList.module.css';

const DescriptionsList = (props) => {
  return (
    <ul className={classes.descriptions}>
      {props.descriptions.map((description) => (
        <DescriptionItem key={description.id} text={description.text} />
      ))}
    </ul>
  );
};

export default DescriptionsList;
