import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAyKt61PKqVuHX8n3O3EYNx8-QWtiNLvic",
  authDomain: "thismovie-9825b.firebaseapp.com",
  projectId: "thismovie-9825b",
  storageBucket: "thismovie-9825b.appspot.com",
  messagingSenderId: "580048694078",
  appId: "1:580048694078:web:64eb362849a20f0b3ada6f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
const db = getFirestore(app);
export const postsCollection = collection(db, "posts");
