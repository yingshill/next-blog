"use client"
import React, { useContext } from 'react'
import styles from './themeToggle.module.css';
import { ThemeContext } from '@/context/ThemeContext';
import Image from 'next/image';

const ThemeToggle = () => {
  const { theme } = useContext(ThemeContext)
  console.log(theme) 
  return (
    <div className={styles.container}>
      <Image src="/moon.png" alt="moon" width={14} height={14}></Image>
      <div className="ball"></div>
      <Image src="/sun.png" alt="sun" width={14} height={14}></Image>
    </div>
  )
}

export default ThemeToggle;

/*
WRONG!!!
import { Image } from 'next/image';
*/