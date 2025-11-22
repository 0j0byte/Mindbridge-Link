// lib/firebase.ts
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD_uZynzjl3RWVcWYA_D6aNegNkeKVITA0",
  authDomain: "mindbridge-link.firebaseapp.com",
  projectId: "mindbridge-link",
  storageBucket: "mindbridge-link.firebasestorage.app",
  messagingSenderId: "787504811674",
  appId: "1:787504811674:web:2338056c6b374e8dc29923",
};

// Ensure Firebase initializes ONLY once
export const app =
  !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

export const db = getFirestore(app);

// THIS WAS MISSING — this initializes AUTH correctly
export const auth = getAuth(app);
