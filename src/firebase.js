import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyAi8nwq-KDZm9eWxSmXKQsvT1jPiDwVfMY",
  authDomain: "chatingo-41587.firebaseapp.com",
  projectId: "chatingo-41587",
  storageBucket: "chatingo-41587.firebasestorage.app",
  messagingSenderId: "260607468097",
  appId: "1:260607468097:web:e6670ede613d85bf501cc0"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()