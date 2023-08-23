// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-pa24VpIQz05wSRFM-icbO1R-OgMY-hw",
  authDomain: "epps2-5365c.firebaseapp.com",
  projectId: "epps2-5365c",
  storageBucket: "epps2-5365c.appspot.com",
  messagingSenderId: "346540483076",
  appId: "1:346540483076:web:f2411a64d15c9c38ab8b51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);