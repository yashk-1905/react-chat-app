import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  // apiKey: "AIzaSyCcQWtyiXZmtowd6kmTb3gL0nDMtqRADwk",
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "react-chat-63f69.firebaseapp.com",
  projectId: "react-chat-63f69",
  storageBucket: "react-chat-63f69.appspot.com",
  messagingSenderId: "846125518534",
  appId: "1:846125518534:web:3b764adb2f88d76cfa51c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();