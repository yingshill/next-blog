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
            <h1 className={styles.postTitle}>About Me</h1>
            <p className={styles.postDesc}>I’m Yingshi Liu, a Fullstack Software Engineer, design thinker, and human-loving optimist, passionate about intuitive user experiences and detail-oriented engineering. My life-long training in public policy and tech focus opened the doors for me to fall in love with the process of tech development for non-profit organizations, and eventually led me to join a tech bootcamp. I’m communicative, energetic, and self-sufficient, whether I am working in a team or developing on my own freelance projects for clients. Always excited to chat about the intersection of tech policy and its modern day quandaries.
            </p>
            <p className={styles.postDesc}>I approach both engineering and design with a focus on people, establishing empathy for the people who make and the people who use the products and services I help bring to life. Throughout my career I've collaborated with a diverse set of clients including Google, LinkedIn, Tencent and Paypal, working with cross-functional teams to create insight led, human-centred experiences that ensure both business and user needs are met.</p>
            <p className={styles.postDesc}>Outside of work, I enjoy cuddling my cats, playing badminton competitively, writing, and travelling.</p>
        </div>
      </div>
    </div>
  )
}
