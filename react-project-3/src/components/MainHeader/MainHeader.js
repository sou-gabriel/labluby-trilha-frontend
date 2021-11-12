import React, { useContext } from 'react';
import AuthContext from '../../store/authContext';

import Navigation from './Navigation';
import classes from './MainHeader.module.css';

const MainHeader = () => {
  const authContext = useContext(AuthContext)

  return (
    <header className={classes['main-header']}>
      <h1>A Typical Page</h1>
      <Navigation isLoggedIn={authContext.isAuthenticated} onLogout={authContext.onLogout} />
    </header>
  );
};

export default MainHeader;
