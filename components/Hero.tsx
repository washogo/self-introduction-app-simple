"use client";

import { useEffect, useRef } from 'react';
import styles from '../styles/Hero.module.css';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollValue = window.scrollY;
      const opacity = Math.max(1 - scrollValue / 500, 0);
      const translateY = scrollValue * 0.4;
      
      heroRef.current.style.opacity = opacity.toString();
      heroRef.current.style.transform = `translateY(${translateY}px)`;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className={styles.hero} ref={heroRef}>
      <div className={styles.content}>
        <h1 className={styles.title}>山田 太郎</h1>
        <p className={styles.subtitle}>ウェブデベロッパー / デザイナー</p>
        <div className={styles.scrollDown}>
          <span>Scroll</span>
          <span className={styles.arrow}>↓</span>
        </div>
      </div>
    </div>
  );
}