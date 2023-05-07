import Link from "next/link"
import styles from './header.module.css'

export default function Header(){
    return (
        <header className={styles.main_header}>
            <section className={styles.header_container}>
            <h1 className={styles.main_blog_name}>
                <Link href={'/'}>My_Blog</Link>
                </h1>
            <nav className={styles.main_category}>
                <li>
                    <Link href="/">home</Link>
                </li>
                <li>
                    <Link href="/about">about</Link>
                </li>
                <li>
                    <Link href="/posts">posts</Link>
                </li>
                <li>
                    <Link href="/contact">contact</Link>
                </li>
            </nav>
            </section>
        </header>


    )
}