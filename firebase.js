// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCIMfKiOVTT9_KPNcbfL3NI2uNHcturzG8",
    authDomain: "not-82fcc.firebaseapp.com",
    projectId: "not-82fcc",
    storageBucket: "not-82fcc.appspot.com",
    messagingSenderId: "500439314718",
    appId: "1:500439314718:web:bc68e5f14ab16c19ea590f"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };