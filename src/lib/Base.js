// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBT1J9VpB9TCeC8TBvXK_4Yokoe0Vytqrc",
  authDomain: "fumi-waste-management.firebaseapp.com",
  projectId: "fumi-waste-management",
  storageBucket: "fumi-waste-management.appspot.com",
  messagingSenderId: "934523925332",
  appId: "1:934523925332:web:ad39272a2d256e56a84ec1",
  measurementId: "G-7NL0WB6LLQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

// export default app;
// const analytics = getAnalytics(app);// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBT1J9VpB9TCeC8TBvXK_4Yokoe0Vytqrc",
//   authDomain: "fumi-waste-management.firebaseapp.com",
//   projectId: "fumi-waste-management",
//   storageBucket: "fumi-waste-management.appspot.com",
//   messagingSenderId: "934523925332",
//   appId: "1:934523925332:web:ad39272a2d256e56a84ec1",
//   measurementId: "G-7NL0WB6LLQ"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app)
// const analytics = getAnalytics(app);// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBT1J9VpB9TCeC8TBvXK_4Yokoe0Vytqrc",
//   authDomain: "fumi-waste-management.firebaseapp.com",
//   projectId: "fumi-waste-management",
//   storageBucket: "fumi-waste-management.appspot.com",
//   messagingSenderId: "934523925332",
//   appId: "1:934523925332:web:ad39272a2d256e56a84ec1",
//   measurementId: "G-7NL0WB6LLQ"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);