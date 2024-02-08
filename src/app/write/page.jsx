"use client"

import React from 'react'
import styles from './writePage.module.css'
import { useState } from 'react'
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useSession } from "next-auth/react";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const storage = getStorage(app);


export default function WritePage() {

  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);
  const { status } = useSession();

  const router = useRouter();

  useEffect(() =>{
    const upload = () => {
        // This code refers the office doc: https://firebase.google.com/docs/storage/web/upload-files
        const name = new Date().getTime + file.name;
        const storageRef = ref(storage, name);
        const uploadTask = uploadBytesResumable(storageRef, file);
        
        // Register three observers:
        // 1. 'state_changed' observer, called any time the state changes
        // 2. Error observer, called on failure
        // 3. Completion observer, called on successful completion
        uploadTask.on('state_changed', 
          (snapshot) => {
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded

            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
              case 'paused':
                console.log('Upload is paused');
                break;
              case 'running':
                console.log('Upload is running');
                break;
            }
          }, 
          (error) => {
          }, 
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              setMedia(downloadURL);
            });
          }
        );
    };
    file && upload;
  }, [file])

  if (status === "loading") {
    return <div className={styles.loading}>
        Loading...
    </div>
  }

  if (status === "unauthenticated") {
    router.push("/");
  }
  
  "use client";

  import Image from "next/image";
  import styles from "./writePage.module.css";
  import { useEffect, useState } from "react";
  import "react-quill/dist/quill.bubble.css";
  import { useRouter } from "next/navigation";
  import { useSession } from "next-auth/react";
  import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
  } from "firebase/storage";
  import { app } from "@/utils/firebase";
  import ReactQuill from "react-quill";
  
  const WritePage = () => {
    const { status } = useSession();
    const router = useRouter();
  
    const [open, setOpen] = useState(false);
    const [file, setFile] = useState(null);
    const [media, setMedia] = useState("");
    const [value, setValue] = useState("");
    const [title, setTitle] = useState("");
    const [catSlug, setCatSlug] = useState("");
  
    useEffect(() => {
      const storage = getStorage(app);
      const upload = () => {
        const name = new Date().getTime() + file.name;
        const storageRef = ref(storage, name);
  
        const uploadTask = uploadBytesResumable(storageRef, file);
  
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused");
                break;
              case "running":
                console.log("Upload is running");
                break;
            }
          },
          (error) => {},
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              setMedia(downloadURL);
            });
          }
        );
      };
  
      file && upload();
    }, [file]);
  
    if (status === "loading") {
      return <div className={styles.loading}>Loading...</div>;
    }
  
    if (status === "unauthenticated") {
      router.push("/");
    }
  
    const slugify = (str) =>
      str
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/[\s_-]+/g, "-")
        .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    const res = await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
            title,
            desc: value,
            img: media,
            slug: slugify(title),
        })

    })
  }



  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Title"
        className={styles.input}
        onChange={e=>setTitle(e.target.value)}
      />
      <select className={styles.select}>
        <option value="style">style</option>
        <option value="fashion">fashion</option>
        <option value="food">food</option>
        <option value="culture">culture</option>
        <option value="travel">travel</option>
        <option value="coding">coding</option>
      </select>
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image src="/plus.png" alt="" width={16} height={16} />
        </button>
        {open && (
          <div className={styles.add}>
            <input
              type="file"
              id="image"
              style={{ display: "none" }}
            />
            <button className={styles.addButton}>
              <label htmlFor="image">
                <Image src="/image.png" alt="" width={16} height={16} />
              </label>
            </button>
            <button className={styles.addButton}>
              <Image src="/external.png" alt="" width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <Image src="/video.png" alt="" width={16} height={16} />
            </button>
          </div>
        )}
        <ReactQuill
          className={styles.textArea}
          theme="bubble"
          placeholder="Tell me your story..."
          value={value}
          onChange={setValue}
        />
      </div>
      <button 
        className={styles.publish}
        onClick={handleSubmit}>
        Publish
      </button>
    </div>
    
  )
}
