import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  sendPasswordResetEmail,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "@firebase/auth";
import "firebase/auth";
import { getFirestore, getDocs, query, collection } from "firebase/firestore";
import { DocumentData } from "@firebase/firestore";
import { QuerySnapshot } from "@firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

export const app = initializeApp(firebaseConfig);

export const auth = {
  getAuth,
  sendPasswordResetEmail,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  getFirestore,
};
export const projectStorage = getStorage(app);
export const db = getDatabase(app);

export const getAllUsers = (): Promise<QuerySnapshot<DocumentData>> => {
  const q = query(collection(auth.getFirestore(), "users"));
  return getDocs(q);
};

