import React from 'react';
import styles from './profile.module.css'
import Image from 'next/image';
import profileImage from   '../../public/profile.jpg'
import Link from 'next/link';

function Profile({}) {
    return (
        <section className={styles.profile_section}>
            <Image src={profileImage} alt='Profile Image' className={styles.profile_image} width={200} height={200}></Image>
            <h2 className={styles.profile_title}>안녕하세요. 김영완 입니다.</h2>
            <h3>Frontend Developer</h3>
            <p>{"초라함이 찬란함으로"}</p>
            <Link className={styles.profile_contact_link} href={'/contact'}>Contact me!</Link>
        </section>
    );
}

export default Profile;
