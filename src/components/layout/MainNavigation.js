import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Todos</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to='/todo' className={navData => navData.isActive ? classes.active : '' }>
              Wszystkie todo
            </NavLink>
          </li>
          <li>
            <NavLink to='/new-todo' className={navData => navData.isActive ? classes.active : '' }>
              Dodaj todo
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
