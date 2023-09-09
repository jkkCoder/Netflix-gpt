// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3oYBLu340D-jOiDokh8NgJGtfv86CXCE",
  authDomain: "netflixgpt-9838b.firebaseapp.com",
  projectId: "netflixgpt-9838b",
  storageBucket: "netflixgpt-9838b.appspot.com",
  messagingSenderId: "724414493757",
  appId: "1:724414493757:web:63ebed53e28a3cc389e654",
  measurementId: "G-DZPPWYNZ9Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()
