import React, { useEffect, useState } from 'react';
import Login from './components/login/login'
import styles from './app.module.css';
import {BrowserRouter, Route, Switch}  from 'react-router-dom';
import Bookpage from './components/bookpage/bookpage';

function App({bookData, authService, bookRepository}) {

  

  return (
    <div className={styles.app}>
      <BrowserRouter>
      <Switch>
      <Route exact path="/">
      <Login authService={authService}/>
      </Route>
      <Route path="/bookpage">
      <Bookpage authService={authService} bookData={bookData} bookRepository={bookRepository} />
      </Route>
      </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
