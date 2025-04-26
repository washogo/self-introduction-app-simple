import styles from '../styles/Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>© {currentYear} 山田 太郎. All Rights Reserved.</p>
        <div className={styles.social}>
          <a href="#" className={styles.socialLink}>Twitter</a>
          <a href="#" className={styles.socialLink}>LinkedIn</a>
          <a href="#" className={styles.socialLink}>GitHub</a>
        </div>
      </div>
    </footer>
  );
}