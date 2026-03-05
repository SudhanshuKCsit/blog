"use client";

import { useState } from "react";
import styles from "./writePage.module.css";
import Image from "next/image";

const WritePage = () => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("style");
  const [content, setContent] = useState("");

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Title"
        className={styles.input}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <select
        className={styles.select}
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="style">Style</option>
        <option value="fashion">Fashion</option>
        <option value="food">Food</option>
        <option value="culture">Culture</option>
        <option value="travel">Travel</option>
        <option value="coding">Coding</option>
      </select>

      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image src="/plus.png" alt="" width={16} height={16} />
        </button>

        {open && (
          <div className={styles.add}>
            <button className={styles.addButton}>
              <Image src="/image.png" alt="" width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <Image src="/external.png" alt="" width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <Image src="/video.png" alt="" width={16} height={16} />
            </button>
          </div>
        )}

        <textarea
          placeholder="Tell your story..."
          className={styles.textArea}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      <button className={styles.publish}>Publish</button>
    </div>
  );
};

export default WritePage;