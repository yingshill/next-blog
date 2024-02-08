// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "nextblog-409305.firebaseapp.com",
  projectId: "nextblog-409305",
  storageBucket: "nextblog-409305.appspot.com",
  messagingSenderId: "91623765554",
  appId: "1:91623765554:web:bf0252271599da02ea2e2b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);