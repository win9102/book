import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import BookData from './service/bookData';
import AuthService from './service/auth_service';
import '@fortawesome/fontawesome-free/js/all';

const authService = new AuthService();
const bookData = new BookData(process.env.REACT_APP_KAKAO_API_KEY);

ReactDOM.render(
  <React.StrictMode>
    <App
     bookData={bookData} 
     authService={authService}/>
  </React.StrictMode>,
  document.getElementById('root')
);



