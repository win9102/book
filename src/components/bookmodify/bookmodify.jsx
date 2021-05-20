import React, { useEffect, useRef, useState } from 'react';
import styles from './bookmodify.module.css';


const Bookmodify = ({setModifyModal, bookid1, datasubmit, deletebook}) => {

    const inputRef = useRef();
    const bookTitle = useRef();
    const bookContents = useRef();
    const [bookObject, setBookObject] = useState(bookid1);
    

  
    const onchange = (e) =>{
        setBookObject(bookdata =>{
            const newchangebookdata = {...bookdata, title : e.target.value }
            return newchangebookdata;
        })
    }
    
    const submit = () =>{
        const book = {
            ...bookObject,
            title : bookTitle.current.value || 'no title...',
            contents : bookContents.current.value || 'no contents...',
        }
        inputRef.current.reset();
        setBookObject({});
        datasubmit(book);
        setModifyModal(false);
    }
    const deleteb = () =>{
        deletebook(bookObject);
        setModifyModal(false);
    }


    return(
        <>
        <section className={styles.modal}>
            <form
            ref={inputRef} 
            className={styles.form}>
            <h2 className={styles.h2}>Book Modify</h2>
            <div className={styles.sbox}>
       
            {
              bookObject.thumbnail && <img className={styles.thumbnail} src={bookObject.thumbnail} alt="bookimage" />
            }
            {
            !bookObject.thumbnail && <p>선택된 이미지가 없습니다</p>
            }

         
            </div>
            <input 
            type="text" 
            placeholder={"책 선택 후 제목 입력해주세요"} 
            className={styles.input}
            ref={bookTitle}
            value={bookObject.title}
            onChange={onchange}
            />
            <textarea
            ref={bookContents}
             placeholder="독서후기를 적어주세요.."
              className={styles.contents}>
                  {bookObject.contents}
              </textarea>
            <button 
            onClick={submit}
            type="button" 
            className={styles.addbtn}
            >Modify</button>

             <button 
            type="button" 
            className={styles.addbtn}
            onClick={deleteb}
            >delete</button>

            <button 
            type="button" 
            className={styles.closebtn}
            onClick={()=>{
                setModifyModal(false)
            }}
            >x</button>
           
            </form>
        </section>
            </>
    )
};

export default Bookmodify;