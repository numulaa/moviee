import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/PostDetail.css";
import axios from "axios";
import { doc, onSnapshot } from "firebase/firestore";
import { auth, postsCollection } from "../firebase";

const baseUrl = "http://localhost:3001";

const PostDetail = () => {
  const { id } = useParams();
  const [currMovie, setCurrMovie] = useState(null);
  const [rating, setRating] = useState([]);
  const user = auth.currentUser;

  useEffect(() => {
    const unsubscribe = onSnapshot(doc(postsCollection, id), (doc) => {
      const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
      console.log(source, " data: ", doc.data());
      setCurrMovie(doc.data());
      setRating(Array.apply("a", Array(Number(doc.data().rating))));
    });
    return unsubscribe;
  }, [id]);

  return (
    <section className="post-detail-main-section">
      {currMovie ? (
        <main className="post-detail-main">
          <div className="post-detail-img-wrapper">
            <img src={currMovie.imageUrl} />
          </div>
          <h3>{currMovie.title}</h3>
          <div className="ratings">
            {rating.map((x, i) => (
              <i className="fa-solid fa-star icon-star-color" key={x}></i>
            ))}
          </div>
          <small>Reviewed by {user.displayName}</small>
          <div className="main-content">
            {/* <p>{currMovie.review.replace(/\n/g, "<br>")}</p> */}
            {currMovie.review.split("\n").map((text) => (
              <p>{text}</p>
            ))}
            <h4>Personal Note</h4>
            <p>{currMovie.personalNote}</p>
          </div>
          <small>
            <i>
              {currMovie.location}. {currMovie.watchedAt}
            </i>
          </small>
        </main>
      ) : (
        <h1>Loading ...</h1>
      )}
    </section>
  );
};

export default PostDetail;
