import React from 'react'
import styles from './comments.module.css'
import Link from 'next/link'

export default function Comments() {
    const status = "unauthenticated"
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Comments</h1>
            {status === "authenticated" ? (
                <div className={styles.write}>
                <textarea
                    placeholder="write a comment..."
                    className={styles.input}
                    onChange={(e) => setDesc(e.target.value)}/>
                <button className={styles.button}>
                    Send
                </button>
                </div>
            ) : (
                <Link href="/login">Login to write a comment</Link>
            )}
            {/* <div className={styles.comments}>
                {isLoading
                ? "loading"
                : data?.map((item) => (
                    <div className={styles.comment} key={item._id}>
                        <div className={styles.user}>
                        {item?.user?.image && (
                            <Image
                            src={item.user.image}
                            alt=""
                            width={50}
                            height={50}
                            className={styles.image}
                            />
                        )}
                        <div className={styles.userInfo}>
                            <span className={styles.username}>{item.user.name}</span>
                            <span className={styles.date}>{item.createdAt}</span>
                        </div>
                        </div>
                        <p className={styles.desc}>{item.desc}</p>
                    </div>
                    ))}
            </div> */}
        </div>
  )
}
