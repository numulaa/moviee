import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Card from "./components/Card";
import Sidebar from "./components/Sidebar";
import Post from "./components/Post";
import FriendLists from "./components/FriendsLists";
import { Link, Outlet } from "react-router-dom";
// const baseMoveiDbUrl = `https://api.themoviedb.org/3/movie/`;
// const url = "https://api.themoviedb.org/3/discover/movie";
// const API_KEY = "cce62c6a0ad767dbecbf31ff7f4ceb1e";

const movieLists = [
  {
    id: 1,
    title: "Habibie Ainun",
    genre: ["romance", "drama"],
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/id/7/74/Habibie_Ainun_Poster.jpg",
    releaseYear: 2012,
    personalNote:
      "always be a good person, and keep striving to achieve your dreams",
    review:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas exercitationem assumenda omnis, laudantium debitis consequuntur, obcaecati ipsum dolorum id vitae, dolores tempore. Fuga, repellendus quos praesentium omnis ducimus consectetur maiores quis dignissimos temporibus quidem perferendis",
    watchedAt: "2 December 2023",
    rating: 5,
    createdAt: "2 December 2023",
    location: "Netflix, in my warm room",
    createdBy: "userId",
  },
  {
    id: 2,
    title: "Enola Holmes",
    genre: ["mistery"],
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/e/e6/Enola_Holmes_poster.jpeg",
    releaseYear: 2020,
    personalNote:
      "be excellent, don't be scared of people's judgement, and keep striving to achieve your dreams",
    review:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas exercitationem assumenda omnis, laudantium debitis consequuntur, obcaecati ipsum dolorum id vitae, dolores tempore. Fuga, repellendus quos praesentium omnis ducimus consectetur maiores quis dignissimos temporibus quidem perferendis",
    watchedAt: "2 December 2023",
    rating: 5,
    createdAt: "2 December 2023",
    location: "Netflix, in my warm room",
    createdBy: "userId",
  },
  {
    id: 3,
    title: "Enola Holmes",
    genre: ["mistery"],
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/e/e6/Enola_Holmes_poster.jpeg",
    releaseYear: 2020,
    personalNote:
      "be excellent, don't be scared of people's judgement, and keep striving to achieve your dreams",
    review:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas exercitationem assumenda omnis, laudantium debitis consequuntur, obcaecati ipsum dolorum id vitae, dolores tempore. Fuga, repellendus quos praesentium omnis ducimus consectetur maiores quis dignissimos temporibus quidem perferendis",
    watchedAt: "2 December 2023",
    rating: 2,
    createdAt: "2 December 2023",
    location: "Netflix, in my warm room",
    createdBy: "userId",
  },
  {
    id: 4,
    title: "Enola Holmes",
    genre: ["mistery"],
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/e/e6/Enola_Holmes_poster.jpeg",
    releaseYear: 2020,
    personalNote:
      "be excellent, don't be scared of people's judgement, and keep striving to achieve your dreams",
    review:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas exercitationem assumenda omnis, laudantium debitis consequuntur, obcaecati ipsum dolorum id vitae, dolores tempore. Fuga, repellendus quos praesentium omnis ducimus consectetur maiores quis dignissimos temporibus quidem perferendis",
    watchedAt: "2 December 2023",
    rating: 3,
    createdAt: "2 December 2023",
    location: "Netflix, in my warm room",
    createdBy: "userId",
  },
];

const friends = [
  {
    id: 1,
    username: "xihailuo",
    gender: "male",
    friendsId: [2, 3],
    isOnline: true,
  },
  {
    id: 2,
    username: "bomba",
    gender: "male",
    friendsId: [1, 3],
    isOnline: true,
  },
  {
    id: 3,
    username: "jiss",
    gender: "female",
    friendsId: [1, 2],
    isOnline: true,
  },
  {
    id: 4,
    username: "nrlmkhlisa",
    gender: "female",
    friendsId: [1, 2, 3],
    isOnline: true,
  },
];
function App() {
  const [movies, setMovies] = useState([]);

  return (
    <section className="main-section">
      <Sidebar />
      <main>
        <h3 className="main-quote">"Cinematic dreams fuel life's scenes."</h3>
        {movieLists.map((movie) => (
          <Link to={`/post/${movie.id}`}>
            <Card movie={movie} key={movie.id} />
          </Link>
        ))}
      </main>
      <section className="right-section">
        {<FriendLists friends={friends} />}
      </section>
    </section>
  );
}

export default App;
