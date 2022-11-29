// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-ij3-jGeVZf1hE3gEbxuMGIQrR5U9g8k",
  authDomain: "fumiwaste.firebaseapp.com",
  projectId: "fumiwaste",
  storageBucket: "fumiwaste.appspot.com",
  messagingSenderId: "157893196634",
  appId: "1:157893196634:web:c64bcf9a7002c58e7b9163",
  measurementId: "G-6TTL6TZXGM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app); 