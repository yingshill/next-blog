import React from 'react'
import styles from './featured.module.css'
import Image from 'next/image'

export default function Featured() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}><b>Hi, this is Yingshi Liu!</b> Discover my stories and creative ideas.</h1> 
      <div className={styles.post}>
        <div className={styles.imgContainer}>
            <Image src='/featureme.jpg' alt='' fill className={styles.image}></Image>
        </div>
        <div className={styles.textContainer}>
            <h1 className={styles.postTitle}>Post Title</h1>
            <p className={styles.postDesc}>Post</p>
            <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  )
}
