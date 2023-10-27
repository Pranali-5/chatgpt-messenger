import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDGyDnRIN-Qb4Unr8fsEb3J3gpViFoiQ4",
  authDomain: "chatgpt-messenger-f97cb.firebaseapp.com",
  projectId: "chatgpt-messenger-f97cb",
  storageBucket: "chatgpt-messenger-f97cb.appspot.com",
  messagingSenderId: "568966454649",
  appId: "1:568966454649:web:5bae53c7c05ce1608563a8",
  measurementId: "G-MPEMPFCGG5",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
