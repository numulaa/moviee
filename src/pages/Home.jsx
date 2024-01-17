import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Home.css";
import Card from "../components/Card";
import Sidebar from "../components/Sidebar";
import Post from "../components/Post";
import FriendLists from "../components/FriendsLists";
import UserSmall from "../components/UserSmall";
import { auth, postsCollection, displayDate } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import {
  doc,
  getDocs,
  onSnapshot,
  query,
  orderBy,
  limit,
} from "firebase/firestore";

const baseUrl = "http://localhost:3001";

function App() {
  const [movieLists, setMovieLists] = useState([]);
  const [friends, setFriends] = useState([]);
  const [photoURL, setPhotoURL] = useState(null);
  const [displayName, setDisplayName] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // get data from firebase
    const q = query(postsCollection, orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, function (snapshot) {
      // sync up our local notes array with the snapshot data
      const postsArr = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setMovieLists(postsArr);
    });

    return unsubscribe;
  }, []);
  console.log(movieLists, "movie list");

  useEffect(() => {
    axios.get(`${baseUrl}/friends`).then((initialFriends) => {
      console.log(initialFriends.data);
      setFriends(initialFriends.data);
    });
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const photoURL = user.photoURL;
        const email = user.email;
        const displayName = user.displayName;
        // const emailVerified = user.emailVerified;

        setPhotoURL(photoURL);
        setDisplayName(displayName);
        setUserEmail(email);
        navigate("/");
      } else {
        navigate("/login");
      }
    });
  }, [auth]);

  return (
    <section className="main-section">
      <main>
        <h3 className="main-quote">"Cinematic dreams fuel life's scenes."</h3>
        {movieLists.map((movie) => (
          <Card movie={movie} key={movie.id} />
        ))}
      </main>
      <section className="right-section">
        <div className="schedules">
          <p>Movie 1</p>
        </div>
        <UserSmall
          userEmail={userEmail}
          displayName={displayName}
          photoURL={photoURL}
        />
        {<FriendLists friends={friends} />}
      </section>
    </section>
  );
}

export default App;
