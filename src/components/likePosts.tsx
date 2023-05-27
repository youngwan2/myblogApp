import CarouselCompo from "./UI/carousel";
import { getAllPost } from "../../blog/data/data";
import { Props } from "../../blog/data/data";
import styles from "./likePosts.module.css";

const LikePosts = async () => {
  const getPostData: Props[] = await getAllPost('');
  return (
    <>
      <br />
      <br />
      <h2 className={styles.post_title}>당신이 좋아하는 포스트</h2>
      <br />

      {/* 캐러셀 컴포넌트 */}
      <CarouselCompo>
        {/* 캐러셀 컴포넌트의 자식요소로 렌더링할 데이터를 배열 형태로 보내주고 있음 */}
        {getPostData.map((post) => {
          return (
            <ul key={post.path} className={styles.post_wrap}>
              {/* 메모)이미지 최소 크기 조절 필요 */}
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
      </CarouselCompo>
    </>
  );
};

export default LikePosts;
