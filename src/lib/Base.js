// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCZph32QUUb5fEacZs2ToZaygOBl2ofIo",
  authDomain: "fumi-waste.firebaseapp.com",
  projectId: "fumi-waste",
  storageBucket: "fumi-waste.appspot.com",
  messagingSenderId: "478775416223",
  appId: "1:478775416223:web:987b4c00267ce8115359aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);