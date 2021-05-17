import React, { useEffect, useState } from 'react';
import styles from './bookpage.module.css';
import Header from '../header/header';
import { useHistory } from 'react-router';
import Book from '../book/book';
import BookAdd from '../bookAdd/bookAdd';
const Bookpage = ({authService, bookData,bookRepository}) => {

    const history = useHistory();
    const historyState = history?.location?.state;
    const [modal, setmodal] = useState(false);
    const [userId, setUserId] = useState(historyState && historyState.id);
    const [bookIntroduce, setBookIntroduce] = useState({

    });

    const logout = () =>{
        authService.logout();
    }
    useEffect(()=>{
        if(!userId){
            return;
        }
        const stopSync = bookRepository.syncBooks(userId, books =>{
            
            setBookIntroduce(books)
        })

        return () =>  stopSync();

    },[userId]);

    useEffect(()=>{
        authService
        .onAuthChange(user =>{
            if(user){
                setUserId(user.uid);
            }else{
                history.push('/');
            }
        })
    })

    const datasubmit = (book) =>{
        setBookIntroduce(data =>{
            const updated = {...data};
            updated[book.id] = book;
            return updated;
        });
        bookRepository.saveBook(userId, book);
    }

    return(
        <>
        <section className={styles.bookpage}>
        <Header logout={logout}/>
        <div className={styles.wrap}>
        {
           Object.keys(bookIntroduce).map((key)=>(
                <Book key={key} item={bookIntroduce[key]}/>
            ))
        }
    
        </div>

        <div className={styles.bookadd}>
            <button
            onClick={()=>{
                setmodal(true)
            }} 
            className={styles.bookaddbtn}>
                <i className="fas fa-plus"></i>
                </button>
        </div>
        </section>
        {
            modal && <BookAdd setmodal={setmodal} bookData={bookData} datasubmit={datasubmit}/>
        }
        </>
    )
};

export default Bookpage;