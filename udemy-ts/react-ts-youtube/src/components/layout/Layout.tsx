import React from 'react';

import style from './Layout.module.less';
import MainNavigation from './MainNavigation';

const Layout: React.FC = (props) => {
  return (
    <div>
      <MainNavigation></MainNavigation>
      <main className={style.main}>{props.children}</main>
    </div>
  );
};

export default Layout;
