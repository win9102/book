import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import BookData from './service/bookData';

const bookData = new BookData(process.env.REACT_APP_KAKAO_API_KEY);

ReactDOM.render(
  <React.StrictMode>
    <App bookData={bookData} />
  </React.StrictMode>,
  document.getElementById('root')
);



