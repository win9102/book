import React, { useRef, useState } from 'react';
import styles from './bookAdd.module.css';
import Bookdata from '../bookdata/bookdata';

const BookAdd = ({setmodal, bookData}) => {

    const inputRef = useRef();
    const bookTitleRef= useRef(null);
    const [bookSearechModal,setBookSearchModal] = useState(false);
    const [bookObject, setBookObject] = useState({});
    const [booksearch, setbooksearch] = useState([]);

    const handleSearch = () =>{
        if(bookTitleRef.current.value == ''){
            return;
        }
        setBookSearchModal(true) 
        bookData
        .searchBook(bookTitleRef.current.value)
        .then((data)=>{
            setbooksearch(data.documents)
            
        })
        bookTitleRef.current.value = "";
    }

    const onClick = (e) =>{
        e.preventDefault();
        handleSearch();
    }

    const onKeyPress = (event) =>{
        if(event.key === 'Enter'){
        handleSearch();
        }
    }



    return(
        <>
        <section className={styles.modal}>
            <form className={styles.form}>
            <h2 className={styles.h2}>Book Add</h2>
            <div className={styles.sbox}>
            <input 
            ref={bookTitleRef}
            type="search" 
            placeholder="책 제목 검색" 
            className={styles.search}
            onKeyPress={onKeyPress}
            />

            {
              bookObject.thumbnail && <img className={styles.thumbnail} src={bookObject.thumbnail} alt="bookimage" />
            }
            {
            !bookObject.thumbnail && <p>선택된 이미지가 없습니다</p>
            }

            <button className={styles.searchbtn} onClick={onClick}>
                <i class="fas fa-search"></i>
                </button>

            </div>
            <input 
            type="text" 
            placeholder={bookObject.title ||"책 선택 후 제목 입력해주세요"} 
            className={styles.input}
            />
            <textarea placeholder="독서후기를 적어주세요.." className={styles.contents}></textarea>
            <button type="button" className={styles.addbtn}>ADD</button>
            <button 
            type="button" 
            className={styles.closebtn}
            onClick={()=>{
                setmodal(false)
            }}
            >x</button>
            </form>
        </section>
        {
            bookSearechModal && <Bookdata 
            booksearch={booksearch}
            setBookSearchModal={setBookSearchModal}
            setBookObject={setBookObject}
            />
        }
            </>
    )
};

export default BookAdd;