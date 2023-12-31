"use client"
import React from 'react'
import styles from "./loginPage.module.css";
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const { data, status } = useSession();
  console.log("data: ", data);
  console.log("status: ", status);

  if (status === "loading") {
    return <div className={styles.loading}>
        Loading...
    </div>
  }

  const router = useRouter();
  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton} onClick={() => signIn("google")}>
          Sign in with Google
        </div>
        <div className={styles.socialButton}>Sign in with Github</div>
        <div className={styles.socialButton}>Sign in with Facebook</div>
      </div>
    </div>
  )
}
