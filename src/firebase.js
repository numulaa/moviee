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
export const db = getFirestore(app);
export const postsCollection = collection(db, "posts");

export function displayDate(firebaseDate) {
  if (!firebaseDate) {
    return "Date processing ...";
  }
  const date = firebaseDate.toDate();

  const day = date.getDate();
  const year = date.getFullYear();

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = monthNames[date.getMonth()];

  let hours = date.getHours();
  let minutes = date.getMinutes();
  // hours = hours < 10 ? "0" + hours : hours;
  // minutes = minutes < 10 ? "0" + minutes : minutes;
  // - ${hours}:${minutes}`

  return `${day} ${month} ${year}`;
}
