import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import BookData from './service/bookData';
import AuthService from './service/auth_service';
import '@fortawesome/fontawesome-free/js/all';
import BookRepository from './service/bookRepository';

const authService = new AuthService();
const bookData = new BookData(process.env.REACT_APP_KAKAO_API_KEY);
const bookRepository = new BookRepository();
ReactDOM.render(
  <React.StrictMode>
    <App
     bookData={bookData} 
     authService={authService}
     bookRepository={bookRepository}/>
  </React.StrictMode>,
  document.getElementById('root')
);



