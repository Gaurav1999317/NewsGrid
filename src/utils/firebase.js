// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtf0RM6y3k5yx6TY9k3myzx_4w7xcKgw0",
  authDomain: "newsrecommendation-d8abe.firebaseapp.com",
  projectId: "newsrecommendation-d8abe",
  storageBucket: "newsrecommendation-d8abe.firebasestorage.app",
  messagingSenderId: "183793867541",
  appId: "1:183793867541:web:dfbabfb0ed5e87d9be271c",
  measurementId: "G-L7WYJ238C3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();