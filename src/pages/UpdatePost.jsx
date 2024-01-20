import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/Create.css";
import Input from "../components/Input";
import { addDoc, serverTimestamp } from "firebase/firestore";
import { postsCollection, auth } from "../firebase";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";

const baseUrl = "http://localhost:3001";

const UpdatePost = () => {
  const { id } = useParams();
  const [currMovie, setCurrMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onSnapshot(doc(postsCollection, id), (doc) => {
      const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
      console.log(source, " data: ", doc.data());
      setCurrMovie(doc.data());
    });
    return unsubscribe;
  }, [id]);

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    const newMovie = {
      ...currMovie,
      createdBy: user.uid,
      imageUrl:
        currMovie.imageUrl ||
        "https://upload.wikimedia.org/wikipedia/en/e/e6/Enola_Holmes_poster.jpeg",
    };

    try {
      const docRef = doc(postsCollection, id);
      await updateDoc(docRef, newMovie);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    navigate(`/`);
  };

  return (
    <div className="create-section">
      {currMovie ? (
        <main className="create-main-section">
          <form onSubmit={handleSubmitForm} className="create-form">
            <div className="top-create-form">
              <div className="create-page-img-wrapper">
                <img
                  src={
                    currMovie.imageUrl ||
                    "https://upload.wikimedia.org/wikipedia/en/e/e6/Enola_Holmes_poster.jpeg"
                  }
                />
              </div>
              <div className="create-form-top-detail">
                <div className="input-wrapper movie-title">
                  <input
                    id="movie-title"
                    type="text"
                    placeholder="Movie title"
                    value={currMovie.title}
                    required={true}
                    onChange={(e) => {
                      setCurrMovie({
                        ...currMovie,
                        title: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="detail-no-title">
                  <Input
                    id="movie-url"
                    label="Image URL"
                    type="text"
                    value={currMovie.imageUrl}
                    required={false}
                    onChange={(e) => {
                      setCurrMovie({
                        ...currMovie,
                        imageUrl: e.target.value,
                      });
                    }}
                  />
                  <Input
                    label="Release Year"
                    id="movie-release-year"
                    type="number"
                    value={currMovie.releaseYear}
                    required={true}
                    onChange={(e) => {
                      setCurrMovie({
                        ...currMovie,
                        releaseYear: e.target.value,
                      });
                    }}
                  />
                  <Input
                    label="Rating"
                    id="movie-rating"
                    type="text"
                    value={currMovie.rating}
                    required={true}
                    onChange={(e) => {
                      setCurrMovie({
                        ...currMovie,
                        rating: e.target.value,
                      });
                    }}
                  />
                  <Input
                    label="Watched At"
                    id="movie-watchedAt"
                    type="date"
                    value={currMovie.watchedAt}
                    required={true}
                    onChange={(e) => {
                      setCurrMovie({
                        ...currMovie,
                        watchedAt: e.target.value,
                      });
                    }}
                  />
                  <Input
                    label="Location"
                    id="movie-location"
                    type="text"
                    value={currMovie.location}
                    required={true}
                    onChange={(e) => {
                      setCurrMovie({
                        ...currMovie,
                        location: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="create-form-bottom-detail">
              <div className="input-wrapper">
                <label htmlFor="movie-review">Review</label>
                <textarea
                  id="movie-review"
                  type="text"
                  value={currMovie.review}
                  required={true}
                  rows="15"
                  onChange={(e) => {
                    setCurrMovie({
                      ...currMovie,
                      review: e.target.value,
                    });
                  }}></textarea>
              </div>
              <div className="input-wrapper">
                <label htmlFor="movie-personal-note">Personal Note</label>
                <textarea
                  id="movie-personal-note"
                  type="text"
                  value={currMovie.personalNote}
                  required={true}
                  rows="10"
                  onChange={(e) => {
                    setCurrMovie({
                      ...currMovie,
                      personalNote: e.target.value,
                    });
                  }}></textarea>
              </div>
              <button type="submit" className="submit-button">
                Submit
              </button>
            </div>
          </form>
        </main>
      ) : null}
    </div>
  );
};

export default UpdatePost;
