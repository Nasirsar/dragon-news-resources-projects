// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// console.log( 'inside firebase config', import.meta.env.VITE_PASS);


const firebaseConfig = {
  apiKey:import.meta.evn.Vite_APIKEY,
  authDomain:import.meta.evn.Vite_AUTHDOMAIN,
  projectId:import.meta.evn.Vite_PROJECTID,
  storageBucket:import.meta.evn.Vite_STORAGEBUCKET,
  messagingSenderId:import.meta.evn.Vite_MESSAGINGSENDERID,
  appId:import.meta.evn.Vite_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app