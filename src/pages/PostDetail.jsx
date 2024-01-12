import React from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "../styles/PostDetail.css";

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

const PostDetail = () => {
  const { id } = useParams();
  const post = movieLists.find((item) => item.id === Number(id));
  console.log(typeof id);
  return (
    <section className="post-detail-main-section">
      <Sidebar />
      <main className="post-detail-main">
        <div className="post-detail-img-wrapper">
          <img src={post.imageUrl} />
        </div>
        <h3>{post.title}</h3>
        <small>Reviewed by {post.createdBy}</small>
        <p>Hello this is the detail post</p>
        <p>{post.review}</p>
        <p>{post.personalNote}</p>
        <small>
          <i>
            {post.location}. {post.watchedAt}
          </i>
        </small>
      </main>
    </section>
  );
};

export default PostDetail;
