import React from 'react'
import styles from './Menu.module.css'
import Link from 'next/link'
import MenuPosts from '../menuPosts/MenuPosts'
import MenuCategories from '../menuCategories/MenuCategories'

export default function Menu() {
  return (
    <div className={styles.container}>
        <h2 className={styles.subtitle}>{"What's Hot"}</h2>
        <h1 className={styles.title}>Most Popular</h1>       
        <MenuPosts withImage={false}></MenuPosts>
        {/*
            <h2 className={styles.subtitle}>Discover By topic</h2>
            <h1 className={styles.title}>Categories</h1>
            <MenuCategories />
            <h2 className={styles.subtitle}>Chosen by the editor</h2>
            <h1 className={styles.title}>Editors Pick</h1>
            <MenuPosts withImage={true}></MenuPosts>
         */}
    </div>
  )
}
