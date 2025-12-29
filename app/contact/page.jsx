import styles from "./contactPage.module.css";

const ContactPage = () => {
  return (
    <>
      <div className={styles.header}>
        <p className={styles.headerText}>
          Welcome to The Sudhanshublog!!!
        </p>
      </div>
      <div className={styles.container}>
        <h5 className={styles.title}>Contact Us</h5>
        <p className={styles.subtitle}>
          Got an issue? Want to send feedback? Need details about our courses?
          Let us know.
        </p>
        <form>
          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label htmlFor="firstName">First Name</label>
              <input
                id="firstName"
                type="text"
                placeholder="Enter First Name"
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="lastName">Last Name</label>
              <input id="lastName" type="text" placeholder="Enter Last Name" />
            </div>
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Your Email</label>
            <input
              id="email"
              type="email"
              placeholder="sudhanshuuu3@dev.org"
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              type="text"
              placeholder="What issue/suggestion do you have?"
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="message">Your Message</label>
            <textarea id="message" rows="6" placeholder="Query/Suggestion..." />
          </div>
          <button type="submit" className={styles.button}>
            Send Message
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactPage;
