// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPShsl1OxNvCBo01jA-3MpDjYnxG1lO-k",
  authDomain: "ema-john-with-firebase-a-5d5f5.firebaseapp.com",
  projectId: "ema-john-with-firebase-a-5d5f5",
  storageBucket: "ema-john-with-firebase-a-5d5f5.appspot.com",
  messagingSenderId: "449329070828",
  appId: "1:449329070828:web:2bd4f2a4ee2ea9e68c1bc9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;