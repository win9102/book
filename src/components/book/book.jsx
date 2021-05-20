import React from 'react';
import styles from './book.module.css';
const Book = ({item, setModifyModal, bookid}) => {

    

    return(
        <div className={styles.contents} onClick={()=>{
            bookid(item.id); 
            setModifyModal(true);
        }}>
        <div className={styles.book}>
        <img 
        className={styles.img}
        src={item.thumbnail} 
        alt="bookthumbnail" />
        <div className={styles.introduce}>
        <h2>{item.title}</h2>
        <span className={styles.span}>
           {item.contents}
            </span>
        </div>
        <div className={styles.mark}>
        <i className="far fa-bookmark"></i>
        </div>
        </div>
    </div>
    )
};

export default Book;