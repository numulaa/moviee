import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Home.css";
import Card from "../components/Card";
import Sidebar from "../components/Sidebar";
import Post from "../components/Post";
import FriendLists from "../components/FriendsLists";
import UserSmall from "../components/UserSmall";
import {
  auth,
  postsCollection,
  displayDate,
  moviesCollection,
} from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { onSnapshot, query, orderBy, where } from "firebase/firestore";
import FormModal from "../components/FormModal";

const baseUrl = "http://localhost:3001";

function App() {
  const [movieLists, setMovieLists] = useState([]);
  const [toWatch, setToWatch] = useState([]);
  const [photoURL, setPhotoURL] = useState(null);
  const [displayName, setDisplayName] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [isShowingMovieListModal, setIsShowingMovieListModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const photoURL = user.photoURL;
        const email = user.email;
        const displayName = user.displayName;
        const uid = user.uid;
        // const emailVerified = user.emailVerified;

        const q = query(
          postsCollection,
          where("createdBy", "==", uid),
          orderBy("createdAt", "desc")
        );

        // fetcing realtime post data from the server
        onSnapshot(q, function (snapshot) {
          // sync up our local notes array with the snapshot data
          const postsArr = snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setMovieLists(postsArr);
        });

        // fetcing realtime to watch movie data from the server
        const movieQ = query(
          moviesCollection,
          where("createdBy", "==", uid),
          where("isWatched", "==", false)
        );

        onSnapshot(movieQ, function (snapshot) {
          // sync up our local notes array with the snapshot data
          const moviesArr = snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setToWatch(moviesArr);
        });

        setPhotoURL(photoURL);
        setDisplayName(displayName);
        setUserEmail(email);
        navigate("/");
      } else {
        navigate("/login");
      }
    });
    return unsubscribe;
  }, []);

  const handleCloseModal = () => setIsShowingMovieListModal(false);

  return (
    <section className="main-section">
      {isShowingMovieListModal && (
        <FormModal handleCloseModal={handleCloseModal} />
      )}
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
        {
          <FriendLists
            movies={toWatch}
            handleOpenMovieModal={() => setIsShowingMovieListModal(true)}
          />
        }
      </section>
    </section>
  );
}

export default App;
