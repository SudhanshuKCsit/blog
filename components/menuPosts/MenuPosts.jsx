import Image from "next/image";
import Link from "next/link";
import styles from "./menuPosts.module.css";

const MenuPosts = ({ withImage }) => {
  return (
    <div className={styles.items}>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Travel</span>
          <h3 className={styles.postTitle}>
            A Journey Through Bohemian Beauty: Exploring the Streets of Prague
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Sudhanshu Kumar</span>
            <span className={styles.date}> - 18.11.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.culture}`}>
            Culture
          </span>
          <h3 className={styles.postTitle}>
            Navigating First Impressions: Introdce Yourself
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Rose Angular</span>
            <span className={styles.date}> - 14.07.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.food}`}>Food</span>
          <h3 className={styles.postTitle}>
            My Favorite Authentic Italian Pasta Dishes
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Jayden Little</span>
            <span className={styles.date}> - 22.03.2024</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.fashion}`}>
            Fashion
          </span>
          <h3 className={styles.postTitle}>
            Timeless Fashion with a Modern Twist Winter Collection
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Satyam Kumar</span>
            <span className={styles.date}> - 15.07.2025</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
