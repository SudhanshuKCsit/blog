import styles from "./singlePage.module.css";
import Menu from "@/components/Menu/Menu";
import Image from "next/image";
import Comments from "../../components/comments/Comments";
const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Easiest Way for React State Management
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/coding.png" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}> Martin Brewer </span>
              <span className={styles.date}>21.08.2023</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/react1.png" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              {" "}
              State management is one of the most important concepts in React
              world. As React components render and update, they rely on state
              to manage and reflect changes in data and UI elements. While Redux
              has dominated the state management landscape for years, developers
              are now seeking more straightforward and lightweight solutions
              like Zustand.
            </p>
            <h2 style={{ marginBottom: "20px" }}>
              {" "}
              Why you should learn Zustand
            </h2>
            <p>
              One of Zustand's standout features is its minimalist API, designed
              to streamline state management in React components. Creating a
              Zustand store is as simple as calling a single function, passing a
              function that defines the store's inital state and actions. Thanks
              to the underlying Immer library, the state can be modified
              directly, eliminating the need for complex reducer functions.
            </p>
            <Image src="/redux.png" alt="" width={378} height={167} />

            <h2 style={{ marginBottom: "20px" }}>
              {" "}
              Is Zustand Better than Redux?{" "}
            </h2>
            <p>
              Zustand reduces boilerplate code and offers a simpler setup
              compared to Redux. If you prefer a simple and concise state
              management solution, Zustand meight be a better fit.
            </p>

            <p>
              Redux, on the other hand, has a more complex setup due to its
              action creators, reducers, and middleware (Is's now much easier
              with Redux Toolkit).While Redux has a larger bundle size, it
              provides a predictable and structured way to manage the state.
              Also, it has a larger bundle size, it provides a predictable and
              structured way to manage the state. Also, it has a larger
              community, so finding a solution is much easier when you encounter
              a problem. I believe using Redux is still beneficial for
              large-scale applications.
            </p>
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
