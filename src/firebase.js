// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_6RxDN2Ed0sa9-9GeYYwEh1GuE-Juc4o",
  authDomain: "the-wisenbergs.firebaseapp.com",
  projectId: "the-wisenbergs",
  storageBucket: "the-wisenbergs.firebasestorage.app",
  messagingSenderId: "102885163606",
  appId: "1:102885163606:web:9057b20766f94468c6b1f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);