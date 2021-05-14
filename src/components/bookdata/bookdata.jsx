import React from 'react';
import styles from './bookdata.module.css'

const Bookdata = ({booksearch,setBookSearchModal,setBookObject}) => {

    const bookDataHandle = (title, thumbnail)=>{
        setBookSearchModal(false);
        setBookObject({
            title,
            thumbnail
        })
    }

            return(
                <section
                onClick={()=>{
                    setBookSearchModal(false);
                }}
                className={styles.modal}>
                <ul className={styles.contents}>
                    {
                         booksearch.map((data)=>(
                            <li 
                            onClick={()=>{bookDataHandle(data.title, data.thumbnail)}}
                            className={styles.booklist}
                            >
                                <img 
                                className={styles.bookimg}
                                src={data.thumbnail || './images/noimage.png'}
                                alt="bookimg" />
                               
                                <div>
                                    <span>{data.title}</span><br />
                                    <span className={styles.authors}>{data.authors}</span>
                                </div>
                            </li>
                         ))
                    }
                </ul>
                </section>
            )
            };

export default Bookdata;