
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
const firebaseConfig = {
  apiKey: "AIzaSyAQ3VL4lFl2k6C0uIrwOINVP9rYEo05oEM",
  authDomain: "react-redux-toolkit-5dab6.firebaseapp.com",
  projectId: "react-redux-toolkit-5dab6",
  storageBucket: "react-redux-toolkit-5dab6.appspot.com",
  messagingSenderId: "537014303133",
  appId: "1:537014303133:web:c6edc04a325bfe16281774"
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseBD = getFirestore( FirebaseApp );