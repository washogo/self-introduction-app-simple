import styles from '../styles/ProfileCard.module.css';

export default function ProfileCard() {
  return (
    <div className={styles.profileCard}>
      <div className={styles.profileImage}>
        <img src="https://images.pexels.com/photos/3760778/pexels-photo-3760778.jpeg?auto=compress&cs=tinysrgb&w=800" alt="プロフィール画像" />
      </div>
      <div className={styles.profileInfo}>
        <h3 className={styles.name}>山田 太郎</h3>
        <p className={styles.title}>ウェブデベロッパー / デザイナー</p>
        <div className={styles.details}>
          <div className={styles.detailItem}>
            <span className={styles.label}>年齢</span>
            <span className={styles.value}>28歳</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.label}>居住地</span>
            <span className={styles.value}>東京都</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.label}>Email</span>
            <span className={styles.value}>example@email.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}