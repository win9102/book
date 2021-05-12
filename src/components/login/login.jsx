import React from 'react';
import styles from './login.module.css';

const Login = (props) => {

    return(
       <section className={styles.container}>
           <img className={styles.book} 
           src="./images/lpbook.png" 
           alt="book" />
           <div className={styles.login}>
            <h1 className={styles.title}>
                My Book_Record
            </h1>
            <h2 className={styles.h2}>Login</h2>
            <button className={styles.loginbtn}>
                Google
            </button>
           </div>
       </section>
    )

} ;

export default Login;