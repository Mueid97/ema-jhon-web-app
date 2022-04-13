// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdfUc8366aRdpkBi1JaOrAZ2aiQ8Azetc",
  authDomain: "ema-jhon-app-1754a.firebaseapp.com",
  projectId: "ema-jhon-app-1754a",
  storageBucket: "ema-jhon-app-1754a.appspot.com",
  messagingSenderId: "632694407158",
  appId: "1:632694407158:web:7e83fd705d333d053451d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;