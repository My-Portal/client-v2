import React from 'react';
import Header from './header/header.js';
import useStyles from '../mui-styles';

export default function Layout({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      {children}
    </div>
  );
}
