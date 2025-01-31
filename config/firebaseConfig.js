// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5LBt_F2j3vXCpfBvedvwqb7DEnm29uAk",
  authDomain: "business-a4e64.firebaseapp.com",
  projectId: "business-a4e64",
  storageBucket: "business-a4e64.firebasestorage.app",
  messagingSenderId: "788710492167",
  appId: "1:788710492167:web:b47e58041edb4855b9c2a2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
