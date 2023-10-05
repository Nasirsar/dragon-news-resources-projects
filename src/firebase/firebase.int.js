// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtsYy74H2fEcnVY3vx6H2rwMZAzRFVHCo",
  authDomain: "dragon-news-resources-projects.firebaseapp.com",
  projectId: "dragon-news-resources-projects",
  storageBucket: "dragon-news-resources-projects.appspot.com",
  messagingSenderId: "695936643147",
  appId: "1:695936643147:web:751d96878eaa49275e1dce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app