"use client";

import styles from "./postsNav.module.css";
import { Props } from "../../blog/data/data";
import { useEffect, useState, useCallback } from "react";

function PostsNav({ allPostData }: any) {
  const [filter, setFilter] = useState("");
  const [render, setRender] = useState("");
  const [category] = useState([
    "All Posts",
    "my story",
    "frontend",
    "backend",
    "javascript",
  ]);
  const [selectMenu, setSelectMenu] = useState("");
  const [getPostData, setGetPostData] = useState<Props[]>([]);

  const filterFunc = useCallback(
    (selectMenu: string) => {
      const getData = allPostData.filter((el: Props) => {
        if(el.category === "All Posts") return el
        return el.category === selectMenu;
      });

      return setGetPostData(getData);
    },
    [allPostData]
  );

  useEffect(() => {
    filterFunc(selectMenu);
  }, [selectMenu, filterFunc]);

  return (
    <section className={styles.post_container}>
      <section className={styles.post_list}>
        {getPostData.map((post: Props) => {
          return (
            <ul key={post.path} className={styles.post_wrap}>
              <li className={styles.post_image}>이미지</li>
              <hr />
              <li className={styles.post_date}>{post.date}</li>
              <li className={styles.post_title}>
                <h3>{post.title}</h3>
              </li>
              <li className={styles.post_description}>{post.description}</li>
              <li className={styles.post_category}>{post.category}</li>
            </ul>
          );
        })}
      </section>
      {/* 카테고리 */}
      <nav className={styles.postsNav}>
        <h1>Category</h1>
        <ul>
          {category.map((cate) => {
            return <li key={cate} onClick={()=>{
              setSelectMenu(cate)
            }}>{cate}</li>;
          })}
        </ul>
      </nav>
    </section>
  );
}

export default PostsNav;
