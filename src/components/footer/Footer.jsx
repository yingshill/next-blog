import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
            <Image src="/featureme.jpg" alt="Vincy Blog" width={50} height={50} className={styles.featuremelogo}></Image>
            <h1 className={styles.logoText}></h1>
        </div>
        <p className={styles.desc}>Welcome to Vincy's blog, a place where you get to know me and share your stories.</p>
        <div className={styles.icons}>
                <Image src="/instagram.png" alt="instagram" width={18} height={18}></Image>
                <Image src="/facebook.png" alt="facebook" width={18}  height={18}></Image>
                <Image src="/xiaohongshu.png" alt="xiaohongshu" width={18} height={18}></Image>
        </div>
      </div>
      
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Red</Link>
        </div>
      </div>
    </div>
  )
}
