import React, { useRef, useState } from 'react';
import styles from './bookAdd.module.css';

const BookAdd = ({setmodal}) => {

    const inputRef = useRef();

    const [img, setimg] = useState();

    const handleSearch = () =>{
       
    }

    const onClick = (e) =>{
        e.preventDefault();
    }

    const onKeyPress = (event) =>{
        if(event.key === 'Enter'){
            
        }
    }



    return(
        <section className={styles.modal}>
            <form className={styles.form}>
            <h2 className={styles.h2}>Book Add</h2>
            <div className={styles.sbox}>
            <input type="search" placeholder="책 제목 검색" className={styles.search}/>
            {
              img && <img src="" alt="bookimage" />
            }
            {
            !img && <p>선택된 이미지가 없습니다</p>
            }
            <button className={styles.searchbtn} onClick={onClick}>
                <i class="fas fa-search"></i>
                </button>
            </div>
            <input type="text" placeholder="제목 입력" className={styles.input} />
            <textarea className={styles.contents}></textarea>
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
    )
};

export default BookAdd;