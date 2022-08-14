import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import Axios from 'axios'

const firebaseConfig = {
  apiKey: process.env.GATSBY_FIREBASE_API_KEY,
  authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.GATSBY_FIREBASE_DATABASE_URL,
  storageBucket: process.env.GATSBY_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.GATSBY_FIREBASE_APP_ID,
  measurementId: process.env.GATSBY_FIREBASE_MEASURMENT_ID
};

// Initialize Firebase
const app =  initializeApp(firebaseConfig);
const db = getFirestore(app);

export { Axios, db }