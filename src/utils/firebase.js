// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCKdxj8PVtUs5Y7m2NMqKVIZcdYFaiuEeY",
  authDomain: "netflixgpt-8cfb3.firebaseapp.com",
  projectId: "netflixgpt-8cfb3",
  storageBucket: "netflixgpt-8cfb3.appspot.com",
  messagingSenderId: "450130528573",
  appId: "1:450130528573:web:6a9a14119d76807bd55d54",
  measurementId: "G-16T3M2HNBH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();