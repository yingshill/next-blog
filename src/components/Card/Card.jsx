import React from 'react'
import styles from './card.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Card({key, item}) {
  return (
    <div className={styles.container} key={key}>
        <div className={styles.imageContainer}>
            {item.img && (
                <div className={styles.imageContainer}>
                {item.img && <Image src={item.img} alt="" fill className={styles.image} />}
                </div>
            )}        
        </div>
        <div className={styles.textContainer}>
            <div className={styles.detail}>
                <span className={styles.date}>{item.createdAt.substring(0,10)} - </span>
                <span className={styles.category}>{item.catSlug}</span>
            </div>
            <Link href={`/posts/${item.slug}`}>
                <h1 className={styles.title}>{item.title}</h1>
            </Link>
            <p className={styles.desc}>{item.desc.substring(0, 60)}</p>
            <Link href={`/posts/${item.slug}`} className={styles.link}>
          Read More
        </Link>
        </div>
    </div>
  )
}
