
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyB73l1vXTZKEaou0lWvuujtbQlDaaDq4g0",
    authDomain: "inland-895bf.firebaseapp.com",
    projectId: "inland-895bf",
    storageBucket: "inland-895bf.appspot.com",
    messagingSenderId: "911910545307",
    appId: "1:911910545307:web:a237a7b0ce2a4cfd7d233e",
    measurementId: "G-HTBXHXSGC2"
};


const app = initializeApp(firebaseConfig);
export default app;
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
