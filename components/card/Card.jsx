import Link from "next/link";
import styles from "./card.module.css";
import Image from "next/image";
const posts = [
  {
    id: 1,
    image: "/coding.png",
    date: "10.10.2025",
    category: "CODING",
    title: "Easiest Way for React State Management",
    desc: "State management is one of the most important concepts in React World ...",
  },
  {
    id: 2,
    image: "/culture.png",
    date: "11.11.2025",
    category: "CULTURE",
    title: "New Visual Feature is a Game Changer",
    desc: "Google just released a new feature for its Bard chatbot that catapults...",
  },
  {
    id: 3,
    image: "/style.png",
    date: "09.09.2025",
    category: "STYLE",
    title: " Some Things I Wish I Could Do Again",
    desc: "For some reason, my basil seems to constantly attract aphids. The firs...",
  },
  {
    id: 4,
    image: "/coding.png",
    date: "08.08.2024",
    category: "CODING",
    title: "What nobody tells you about taking a career break",
    desc: "Once we've learned how to do something, we become 'unconsiously compe...",
  },
];
const Card = () => {
  return (
    <>
      {posts.map((post) => (
        <div key={post.id} className={styles.container}>
          <div className={styles.imageContainer}>
            <Image
              src={post.image}
              alt={post.title}
              fill
              className={styles.image}
            />
          </div>
          <div className={styles.textContainer}>
            <div className={styles.detail}>
              <span className={styles.date}>{post.date}</span>
              <span className={styles.category}>{` - ${post.category}`}</span>
            </div>
            <Link href="/">
              <h2 className={styles.title}>{post.title}</h2>
            </Link>
            <p className={styles.desc}>{post.desc}</p>
            <Link href="/" className={styles.link}>
              Read More
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
