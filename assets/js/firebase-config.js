// ─── Firebase Analytics Configuration ─────────────────────────────────────────
// 
// HOW TO GET YOUR FIREBASE CREDENTIALS (2 minutes):
// 1. Go to https://console.firebase.google.com/
// 2. Select or create your Firebase project (e.g. "AlirezaNezami-Portfolio")
// 3. Click the Web icon (</>) to add a Web App to your project
// 4. Copy the firebaseConfig object properties into the object below
// 5. Save this file, commit & push to GitHub Pages!
// 
// Firebase Analytics will automatically track visitor count, location, device type,
// session duration, and page views in real-time in your Firebase Console dashboard!
// ─────────────────────────────────────────────────────────────────────────────

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-p3PPWaiJoRHdqhO3sv4_Tt1rmgZwBJc",
  authDomain: "alireza-portfolio.firebaseapp.com",
  projectId: "alireza-portfolio",
  storageBucket: "alireza-portfolio.firebasestorage.app",
  messagingSenderId: "244392362214",
  appId: "1:244392362214:web:ab4febdc055288eab7fb27",
  measurementId: "G-RF4MQ5BV9L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);