import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
// const baseMoveiDbUrl = `https://api.themoviedb.org/3/movie/`;
// const url = "https://api.themoviedb.org/3/discover/movie";
// const API_KEY = "cce62c6a0ad767dbecbf31ff7f4ceb1e";

const movieLists = [
  {
    id: 1,
    title: "Habibie Ainun",
    genre: ["mistery", "fantasy"],
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
  },
  {
    id: 1,
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
  },
];

function App() {
  const [movies, setMovies] = useState([]);

  return (
    <>
      <Header />
      <button>Add new</button>
      <main>
        {movieLists.map((movie) => (
          <Card movie={movie} key={movie.id} />
        ))}
      </main>
    </>
  );
}

export default App;
