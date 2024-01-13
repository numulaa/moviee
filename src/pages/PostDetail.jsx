import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "../styles/PostDetail.css";
import axios from "axios";

const baseUrl = "http://localhost:3001";

const PostDetail = () => {
  const { id } = useParams();
  const [currMovie, setCurrMovie] = useState({});
  const [rating, setRating] = useState([]);
  const [review, setReview] = useState([]);

  useEffect(() => {
    axios.get(`${baseUrl}/movieLists`).then((res) => {
      const response = res.data;
      const post = response.find((item) => item.id === Number(id));
      setCurrMovie(post);
      setRating(Array.apply("a", Array(post.rating)));
      setReview(post.review);
    });
  }, []);
  return (
    <section className="post-detail-main-section">
      <Sidebar />
      <main className="post-detail-main">
        <div className="post-detail-img-wrapper">
          <img src={currMovie.imageUrl} />
        </div>
        <h3>{currMovie.title}</h3>
        <div className="ratings">
          {rating.map((x, i) => (
            <i className="fa-solid fa-star icon-star-color" key={i}></i>
          ))}
        </div>
        <small>Reviewed by {currMovie.createdBy}</small>
        <div className="main-content">
          {review.map((text) => (
            <p key={text}>{text}</p>
          ))}
          {/* <p>{currMovie.review}</p> */}
          <h4>Personal Note</h4>
          <p>{currMovie.personalNote}</p>
        </div>
        <small>
          <i>
            {currMovie.location}. {currMovie.watchedAt}
          </i>
        </small>
      </main>
    </section>
  );
};

export default PostDetail;
