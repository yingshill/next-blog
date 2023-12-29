import React from 'react'
import styles from './card.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Card({key, item}) {
  return (
    <div className={styles.container} key={key}>
        <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image}></Image>
        </div>
        <div className={styles.textContainer}>
            <div className={styles.detail}>
                <span className={styles.date}>11.02.2023 - </span>
                <span className={styles.category}>CULTURE</span>
            </div>
            <Link href="/">
                <h1 className={styles.title}>{item.title}</h1>
            </Link>
            <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            <Link href="/" className={styles.link}>Read More</Link>
        </div>
    </div>
  )
}
