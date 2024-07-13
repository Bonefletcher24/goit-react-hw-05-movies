// src/components/Shared/Header/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <Link to="/" className={styles.link}>Home</Link>
        <Link to="/movies" className={styles.link}>Movies</Link>
      </nav>
    </header>
  );
};

export default Header;
