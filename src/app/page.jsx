import CategoryList from "@/components/categoryList/CategoryList";
import styles from "./homepage.module.css";
import React from 'react'
import CardList from "@/components/cardList/CardList";

export default function page() {
  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  )
}
