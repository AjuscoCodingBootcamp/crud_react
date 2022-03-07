// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCjr7HWofLX3_lM70V6G88qsjeeAUHV0E",
  authDomain: "daily-tasks-c1b2c.firebaseapp.com",
  projectId: "daily-tasks-c1b2c",
  storageBucket: "daily-tasks-c1b2c.appspot.com",
  messagingSenderId: "470537501426",
  appId: "1:470537501426:web:a7948e34cd6c7d9fc42e6b"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
//declaramos variable para inicializar db firestore
const db = getFirestore(app);

//console.log(db)

export {db};