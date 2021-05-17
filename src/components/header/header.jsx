import React from 'react';
import styles from './header.module.css';


const Header = ({logout}) => {

    return(
        <header className={styles.header}>
            <h1 className={styles.title}>My Book_Record</h1>
            <button 
            onClick={logout}
            className={styles.logoutbtn}
            >
                <i className="fas fa-sign-out-alt"></i> Logout</button>
        </header>
    )
};

export default Header;