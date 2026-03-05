import Link from "next/link";
import styles from "./card.module.css";
import Image from "next/image";
import axios from "axios";

async function getBlogs() {
  try {
    const response = await axios.get(`http://localhost:1337/api/blogs?populate=*&sort=createdAt:desc&pagination[limit]=4`)
    return response.data.data
  } catch (error) {
    console.log(`Error Fetching blogs`,error)
    throw new Error (`Failed to fetch blogs`)
  }
}
const Card = async () => {
  const posts = await getBlogs();
  return (
    <>
      {posts.map((post) => {
        const title = post.Title;
        const slug = post.Slug 
        const imageUrl = post.Thumbnail ?. url ? `${'http://localhost:1337'}${post.Thumbnail.url}` : "/noimage.png"
        let category = post ?. Category ?. [0] ?. children ?. [0] ?. text || 'general'
        return (
          <div key = {post.id} className = {styles.container}>

            <div className = {styles.imageContainer}>
              <Image src= {imageUrl} alt= {title} fill className={styles.image} />
            </div>

            <div className = {styles.textContainer}>
              <div className = {styles.detail}>
                <span className = {styles.date}>{post.Date}</span>
                <span className = {styles.category}>{` - ${category}`}</span>
              </div>
              <Link href = {`/${slug}`}>
                <h2 className = {styles.title}>{title}</h2>
              </Link>
              <p className = {styles.desc}>{post.Description}</p>
              <Link href = {`/${slug}`} className = {styles.link}>
                Read More
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
