import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import FavoritesContext from '../../store/FavoritesContext';

import style from './MainNavigation.module.less';

const MainNavigation: React.FC = () => {
  const favoritesCtx = useContext(FavoritesContext);

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
            <Link to='/favorites'>
              MY Favorites ({favoritesCtx.favorites.length})
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
