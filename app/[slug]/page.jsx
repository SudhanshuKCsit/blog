import styles from "./singlePage.module.css";
import Menu from "@/components/Menu/Menu";
import Image from "next/image";
import Comments from "../../components/comments/Comments";

async function getPost(slug) {
  try {
    const response = await fetch(`http://localhost:1337/api/posts?filters[Slug][$eq]=${slug}&populate=*`);
    const data = await response.json()
    return data.data ?.[0] || null
  } catch (error){
    console.log(`${'Error Fetching Post',error}`)
  }
}

function formatDescription(descriptionBlocks) {
  if(!descriptionBlocks){return null}
  return descriptionBlocks.map((block,blockIndex)=>(
    <p key = {blockIndex}>
      {block.children ?.map((child, childIndex)=>{
        if(child.bold) {
          return <strong key = {childIndex}> {child.text} </strong>
        }
        return child.text
      })}
    </p>
  ))
}

const SinglePage = async ({params}) => {
  const { slug } = await params
  const post = await getPost(slug);
  if(!post) { return  <div> POST NOT FOUND </div>}
  const formattedDate =  new Date(post.Date).toLocaleDateString() 
  
  const authorImageUrl = post.AuthorImage ?. formats ?. thumbnail ?.url ? `${'http://localhost:1337'}${post.AuthorImage.formats.thumbnail.url}` : null
  const thumbnailImageUrl = post.Thumbnail ?. url ? `${'http://localhost:1337'}${post.Thumbnail.url}` : null 
  const coverImageUrl = post.CoverImage ?. url ? `${'http://localhost:1337'}${post.CoverImage.url}` : null

  const formattedDescription = formatDescription(post.Description)

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{post.Title}</h1>

          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              {authorImageUrl && (
                <Image
                  src={authorImageUrl}
                  alt = ''
                  fill
                  className={styles.avatar}
                />
              )}
            </div>

            <div className={styles.userTextContainer}>
              <span className={styles.username}> <strong> {post.Author} </strong> </span>
              <span className={styles.date}>{formattedDate}</span>
            </div>
          </div>
        </div>

        <div className={styles.imageContainer}>
          {thumbnailImageUrl && (
            <Image
              src={thumbnailImageUrl}
              alt=''
              fill
              className={styles.image}
            />
          )}
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            {formattedDescription}
            {coverImageUrl && (
              <Image  src = {coverImageUrl} alt ='' width = {378} height={167} style={{margin : '20px 0'}}/>
            )}
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
