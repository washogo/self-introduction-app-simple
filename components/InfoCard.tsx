import React from 'react';
import styles from '../styles/InfoCard.module.css';

interface InfoCardProps {
  title: string;
  items: string[];
  icon?: React.ReactNode;
  delay?: number;
}

export default function InfoCard({ title, items, icon, delay = 0 }: InfoCardProps) {
  return (
    <div className={`${styles.infoCard} animate-fade-up delay-${delay}`}>
      {icon && <div className={styles.icon}>{icon}</div>}
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.list}>
        {items.map((item, index) => (
          <li key={index} className={styles.item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}