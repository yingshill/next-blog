import React from 'react'
import styles from "./CardList.css"
import Pagination from "../pagination/Pagination"

export default function CardList() {
  return (
    <div className={styles.container}>
      CardList 
      <Pagination />
    </div>
  )
}