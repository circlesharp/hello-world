import React from 'react';
import Link from 'next/link';

import style from './MainNavigation.module.scss';

const MainNavigation: React.FC = () => {
  return (
    <header className={style.header}>
      <div className={style.logo}>React Meetups</div>

      <nav>
        <ul>
          <li>
            <Link href='/'>All Meetups</Link>
          </li>
          <li>
            <Link href='/new-meetup'>Add New Meetups</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
