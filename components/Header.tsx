"use client";

import { useState, useEffect } from 'react';
import '../styles/global.css';
import styles from '../styles/Header.module.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  
  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <h1 className={styles.logo}>自己紹介</h1>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}><a href="#profile">プロフィール</a></li>
            <li className={styles.navItem}><a href="#appeal">アピールポイント</a></li>
            <li className={styles.navItem}><a href="#interests">好き嫌い</a></li>
            <li className={styles.navItem}><a href="#hobbies">趣味</a></li>
            <li className={styles.navItem}><a href="#goals">目標</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}