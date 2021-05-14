import React, { useEffect, useState } from 'react';
import styles from './bookpage.module.css';
import Header from '../header/header';
import { useHistory } from 'react-router';
import Book from '../book/book';
import BookAdd from '../bookAdd/bookAdd';
const Bookpage = ({authService}) => {

    const history = useHistory();
    const [modal, setmodal] = useState(false);

    const [bookIntroduce, setBookIntroduce] = useState([
        {
            id:1,
            title:"모모",
            img:"https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F616146%3Ftimestamp%3D20210513155738",
            contents: 
           "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis repellendus, quasi reiciendis quaerat dolore magni recusandae dicta placeat aut sed maxime? Esse, atque alias! Quos eos possimus quaerat sunt provident?"
                       
        }
        
    ]);

    const logout = () =>{
        authService.logout();
    }

    useEffect(()=>{
        authService
        .onAuthChange(user =>{
            if(!user){
                history.push('/');
            }
        })
    })

    return(
        <>
        <section className={styles.bookpage}>
        <Header logout={logout}/>
        <div className={styles.wrap}>
        {
            bookIntroduce.map((item)=>(
                <Book key={item.id} item={item}/>
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
            modal && <BookAdd setmodal={setmodal}/>
        }
        </>
    )
};

export default Bookpage;