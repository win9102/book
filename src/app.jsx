import React, { useEffect, useState } from 'react';
import './app.css';


function App({bookData}) {

  const [books, setBooks] = useState([]);

  useEffect(()=>{

   bookData
   .searchBook()
   .then(data => setBooks(data.documents));

  },[])

  return (
    <div>
      <ul>
        {
          books.map((data)=>(

             <li>{data.title}<img src={data.thumbnail} /></li>
            
            
          ))
        }
      </ul>
    </div>
  );
}

export default App;
