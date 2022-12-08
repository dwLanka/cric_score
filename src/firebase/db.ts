// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGoPsncRNUeetKj9E6VW-c0hv1OxhY2kk",
  authDomain: "cricsco-3fee1.firebaseapp.com",
  projectId: "cricsco-3fee1",
  storageBucket: "cricsco-3fee1.appspot.com",
  messagingSenderId: "673178127220",
  appId: "1:673178127220:web:2ab5c061c1688971f63a21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);