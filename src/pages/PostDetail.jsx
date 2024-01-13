import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "../styles/PostDetail.css";
import axios from "axios";

const baseUrl = "http://localhost:3001";

const PostDetail = () => {
  const { id } = useParams();
  const [currMovie, setCurrMovie] = useState({});

  useEffect(() => {
    axios.get(`${baseUrl}/movieLists`).then((res) => {
      const response = res.data;
      const post = response.find((item) => item.id === Number(id));
      setCurrMovie(post);
    });
  }, []);

  console.log(currMovie);
  return (
    <section className="post-detail-main-section">
      <Sidebar />
      <main className="post-detail-main">
        <div className="post-detail-img-wrapper">
          <img src={currMovie.imageUrl} />
        </div>
        <h3>{currMovie.title}</h3>
        <small>Reviewed by {currMovie.createdBy}</small>
        <p>Hello this is the detail post</p>
        <p>{currMovie.review}</p>
        <p>{currMovie.personalNote}</p>
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
