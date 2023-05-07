import React from "react";
import Image from "next/image";
import styles from "./featuredPosts.module.css";
import getFeaturedPost from "../../blog/data/data";
import { getImageData } from "../../blog/data/data";

const FeaturedPosts = async () => {
  const featuredData = await getFeaturedPost();
  const images = getImageData();

  return (
    <>
      <br />
      <h2 className={styles.main_featured_post_title}>선택된 포스트</h2>
      <section className={styles.main_featured_post_section}>
        {featuredData.map((item, i) => {
          return (
            <article key={i} className={styles.main_featured_items}>
              <Image
                className={styles.item_image}
                src={images[i]}
                alt="post_image"
              ></Image>
              <hr />
              <span className={styles.item_date}>{item.date}</span>
              <h3 className={styles.item_title}>{item.title}</h3>
              <p className={styles.item_description}>{item.description}</p>
              <p className={styles.item_category}>{item.category}</p>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default FeaturedPosts;
