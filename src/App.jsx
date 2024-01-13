import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Card from "./components/Card";
import Sidebar from "./components/Sidebar";
import Post from "./components/Post";
import FriendLists from "./components/FriendsLists";
// const baseMoveiDbUrl = `https://api.themoviedb.org/3/movie/`;
// const url = "https://api.themoviedb.org/3/discover/movie";
// const API_KEY = "cce62c6a0ad767dbecbf31ff7f4ceb1e";

const baseUrl = "http://localhost:3001";

function App() {
  const [movieLists, setMovieLists] = useState([]);
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    axios.get(`${baseUrl}/movieLists`).then((res) => {
      console.log(res.data);
      setMovieLists(res.data);
    });
  }, []);
  useEffect(() => {
    axios.get(`${baseUrl}/friends`).then((initialFriends) => {
      console.log(initialFriends.data);
      setFriends(initialFriends.data);
    });
  }, []);

  return (
    <section className="main-section">
      <Sidebar />
      <main>
        <h3 className="main-quote">"Cinematic dreams fuel life's scenes."</h3>
        {movieLists.map((movie) => (
          <Card movie={movie} key={movie.id} />
        ))}
      </main>
      <section className="right-section">
        {<FriendLists friends={friends} />}
      </section>
    </section>
  );
}

export default App;
