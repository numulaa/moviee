import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "../styles/PostDetail.css";
import { doc, onSnapshot, deleteDoc } from "firebase/firestore";
import { auth, postsCollection } from "../firebase";

const PostDetail = () => {
  const { id } = useParams();
  const [currMovie, setCurrMovie] = useState(null);
  const [rating, setRating] = useState([]);
  const user = auth.currentUser;
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onSnapshot(doc(postsCollection, id), (doc) => {
      const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
      setCurrMovie(doc.data());
      setRating(Array.apply("a", Array(Number(doc.data().rating))));
    });
    return unsubscribe;
  }, [id]);
  const handleDelete = async () => {
    await deleteDoc(doc(postsCollection, id));
    navigate("/");
  };

  return (
    <section className="post-detail-main-section">
      {currMovie ? (
        <main className="post-detail-main">
          <div className="top-nav">
            <div className="back-btn">Back</div>
            <div className="delete-update-btn-container">
              <Link to={`/update/${id}`} className="btn edit-btn">
                Edit
              </Link>
              <button onClick={handleDelete} className="btn delete-btn">
                Delete
              </button>
            </div>
          </div>
          <div className="post-detail-img-wrapper">
            <img src={currMovie.imageUrl} />
          </div>
          <h3>{currMovie.title}</h3>
          <div className="ratings">
            {rating.map((x, i) => (
              <i className="fa-solid fa-star icon-star-color" key={i}></i>
            ))}
          </div>
          <small>Reviewed by {user.displayName}</small>
          <div className="main-content">
            {currMovie.review.split("\n").map((text) => (
              <p key={text}>{text}</p>
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
