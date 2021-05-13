import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import styles from './login.module.css';

const Login = ({authService}) => {

    const history = useHistory();
    const bookpage = (userId) => {
        history.push({
            pathname:'/bookpage',
            state: {id:userId}
        })
    }

    const login = () =>{
        authService
        .login()
        .then(data => bookpage(data.user.uid));
    }

    useEffect(()=>{
        authService
        .onAuthChange(user =>{
            user && bookpage(user.uid);
        })
    },[])

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
            <button 
            className={styles.loginbtn}
            onClick={login}
            >
                Google
            </button>
           </div>
       </section>
    )

} ;

export default Login;