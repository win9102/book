import React, { useEffect, useState } from 'react';
import Login from './components/login/login'
import styles from './app.module.css';
import {BrowserRouter, Route, Switch}  from 'react-router-dom';
import Bookpage from './components/bookpage/bookpage';

function App({bookData}) {

  

  return (
    <div className={styles.app}>
      <BrowserRouter>
      <Switch>
      <Route exact path="/">
      <Login/>
      </Route>
      <Route path="/bookpage">
      <Bookpage/>
      </Route>
      </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
