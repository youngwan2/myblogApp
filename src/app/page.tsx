import styles from "./page.module.css";
import Profile from "@/components/profile";
import FeaturedPosts from "@/components/featuredPosts";
import LikePosts from "@/components/likePosts";


export default async function HomePage() {
  return (
    <section className={styles.main_section}>
      <Profile />
      {/* @ts-expect-error Async Server Component */}
      <FeaturedPosts />
        {/* @ts-expect-error Async Server Component */}
      <LikePosts/>
    </section>
  );
}
