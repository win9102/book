import React, { useEffect } from 'react';
import styles from './bookpage.module.css';
import Header from '../header/header';
import { useHistory } from 'react-router';
const Bookpage = ({authService}) => {

    const history = useHistory();
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
        <section className={styles.bookpage}>
        <Header logout={logout}/>
        <div className={styles.wrap}>
        <div className={styles.contents}>
            <div className={styles.book}>
            <div className={styles.mark}>
            <i className="far fa-bookmark"></i>
            </div>

            </div>
        </div>
        <div className={styles.contents}>
            <div className={styles.book}>
            <div className={styles.mark}>
            <i className="far fa-bookmark"></i>
            </div>

            </div>
        </div>
        <div className={styles.contents}>
            <div className={styles.book}>
            <div className={styles.mark}>
            <i className="far fa-bookmark"></i>
            </div>

            </div>
        </div>
        </div>

        <div className={styles.bookadd}>
            <button className={styles.bookaddbtn}><i className="fas fa-plus"></i></button>
        </div>
        </section>
    )
};

export default Bookpage;