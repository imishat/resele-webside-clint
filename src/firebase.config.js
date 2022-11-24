// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAS1jgf39wL0Oc6inDC4o40LgJhxQ8SXPg",
  authDomain: "byandsell-40dc9.firebaseapp.com",
  projectId: "byandsell-40dc9",
  storageBucket: "byandsell-40dc9.appspot.com",
  messagingSenderId: "20997812003",
  appId: "1:20997812003:web:4d4bfc98fc77e079c72696"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app