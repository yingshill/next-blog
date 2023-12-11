import React from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import ThemeToggle from '../themeToggle/ThemeToggle'
import AuthLinks from '../authLinks/AuthLinks'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className={styles.container}>
        {/* All Social media Logos */} 
        <div className={styles.social}>
            <Image src="/instagram.png" alt="instagram" width={24} height={24}></Image>
            <Image src="/facebook.png" alt="facebook" width={24}  height={24}></Image>
            <Image src="/xiaohongshu.png" alt="xiaohongshu" width={24} height={24}></Image>
        </div>
        
        {/* Blog Name */} 
        <div className={styles.logo}>Vincy's Blog</div>

        {/* All links on the right */} 
        <div className={styles.links}>
            <ThemeToggle />
            <Link href="/">Homepage</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
            <AuthLinks />
        </div>
    </div>
  )
}
