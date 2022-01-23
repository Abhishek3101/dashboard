// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCj7dUeD2LtzfXtMjTyG81z6mDqt_ZQep0",
  authDomain: "pearmock-prototyping.firebaseapp.com",
  projectId: "pearmock-prototyping",
  storageBucket: "pearmock-prototyping.appspot.com",
  messagingSenderId: "469073653762",
  appId: "1:469073653762:web:4a17b450fdf703e692f71b",
  measurementId: "G-QZFHKQ4Q89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)