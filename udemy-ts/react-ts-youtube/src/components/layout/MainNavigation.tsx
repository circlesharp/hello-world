import React from 'react';
import { Link } from 'react-router-dom';

import style from './MainNavigation.module.less';

const MainNavigation: React.FC = () => {
  return (
    <header className={style.header}>
      <div className={style.logo}>React Meetups</div>

      <nav>
        <ul>
          <li>
            <Link to='/'>All Meetups</Link>
          </li>
          <li>
            <Link to='/new-meetup'>Add New Meetups</Link>
          </li>
          <li>
            <Link to='/favorites'>MY Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
