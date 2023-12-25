import React from 'react'
import styles from './singlePage.moudle.css'
import Menu from '@/components/menu/Menu'
import Image from 'next/image'

export default function SinglePage() {
  return (
    <div className={styles.container}>
    <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
            <h1 className={styles.title}></h1>
            <div className={styles.user}>
                <div className={styles.userImageCOntainer}>
                    <Image src='/p1.jpeg' alt='' fill className={styles.image}></Image>
                </div>
                <div className={styles.userTextContainer}>
                    <span className={styles.username}>Yingshi Liu</span>
                    <span className={styles.date}>01.01.2024</span>
                </div>
            </div>
        </div>
        <div className={styles.imageContainer}>
            <Image src="" alt="" fill className={styles.image}></Image>
        </div>
    </div>
    <div className={styles.content}>
        <div className={styles.post}>
            <div className={styles.description}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </div>
        <Menu />
    </div>
      
    </div>
  )
}
