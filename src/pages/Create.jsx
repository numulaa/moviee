import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Create.css";
import Sidebar from "../components/Sidebar";

const baseUrl = "http://localhost:3001";

const CreateForm = () => {
  const [newMovieReview, setNewMovieReview] = useState({
    id: 1,
    title: "",
    genre: [],
    imageUrl: "",
    releaseYear: 2012,
    personalNote: "",
    review: "",
    watchedAt: "",
    rating: 5,
    createdAt: "2 December 2023",
    location: "",
    createdBy: "",
  });
  const navigate = useNavigate();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const newId = Math.random();
    const newMovie = {
      ...newMovieReview,
      id: newId,
      createdAt: new Date(),
    };
    axios.post(`${baseUrl}/movieLists`, newMovie).then((res) => res.data);
    console.log(newMovie);
    setNewMovieReview({
      id: 1,
      title: "",
      genre: [],
      imageUrl: "",
      releaseYear: 2012,
      personalNote: "",
      review: "",
      watchedAt: "",
      rating: 5,
      createdAt: "2 December 2023",
      location: "",
      createdBy: "",
    });
    navigate(`/`);
  };
  return (
    <div className="create-section">
      <Sidebar />
      <main className="create-main-section">
        <form onSubmit={handleSubmitForm} className="create-form">
          <div className="top-create-form">
            <div className="create-page-img-wrapper">
              <img
                src={
                  newMovieReview.imageUrl ||
                  "https://upload.wikimedia.org/wikipedia/en/e/e6/Enola_Holmes_poster.jpeg"
                }
              />
            </div>
            <div className="create-form-top-detail">
              <div className="input-wrapper movie-title">
                {/* <label htmlFor="movie-title">Title</label> */}
                <input
                  id="movie-title"
                  type="text"
                  placeholder="Movie title"
                  value={newMovieReview.title}
                  onChange={(e) => {
                    setNewMovieReview({
                      ...newMovieReview,
                      title: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="detail-no-title">
                <div className="input-wrapper">
                  <label htmlFor="movie-image-link">Image URL</label>
                  <input
                    id="movie-image-link"
                    type="text"
                    value={newMovieReview.imageUrl}
                    onChange={(e) => {
                      setNewMovieReview({
                        ...newMovieReview,
                        imageUrl: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="input-wrapper">
                  <label htmlFor="movie-release-year">Release Year</label>
                  <input
                    id="movie-release-year"
                    type="number"
                    value={newMovieReview.releaseYear}
                    onChange={(e) => {
                      setNewMovieReview({
                        ...newMovieReview,
                        releaseYear: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="input-wrapper">
                  <label htmlFor="movie-rating">Rating</label>
                  <input
                    id="movie-rating"
                    type="text"
                    value={newMovieReview.rating}
                    onChange={(e) => {
                      setNewMovieReview({
                        ...newMovieReview,
                        review: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="input-wrapper">
                  <label htmlFor="movie-watchedAt">Watched At</label>
                  <input
                    id="movie-watchedAt"
                    type="date"
                    value={newMovieReview.watchedAt}
                    onChange={(e) => {
                      setNewMovieReview({
                        ...newMovieReview,
                        watchedAt: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="input-wrapper">
                  <label htmlFor="movie-location">Location</label>
                  <input
                    id="movie-location"
                    type="text"
                    value={newMovieReview.location}
                    onChange={(e) => {
                      setNewMovieReview({
                        ...newMovieReview,
                        location: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="input-wrapper">
                  <label htmlFor="movie-createdBY">Created By</label>
                  <input
                    id="movie-createdBY"
                    type="text"
                    value={newMovieReview.createdBy}
                    onChange={(e) => {
                      setNewMovieReview({
                        ...newMovieReview,
                        createdBy: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="create-form-bottom-detail">
            <div className="input-wrapper">
              <label htmlFor="movie-personal-note">Personal Note</label>
              <textarea
                id="movie-personal-note"
                type="text"
                value={newMovieReview.personalNote}
                rows="10"
                onChange={(e) => {
                  setNewMovieReview({
                    ...newMovieReview,
                    personalNote: e.target.value,
                  });
                }}></textarea>
            </div>
            <div className="input-wrapper">
              <label htmlFor="movie-review">Review</label>
              <textarea
                id="movie-review"
                type="text"
                value={newMovieReview.review}
                rows="15"
                onChange={(e) => {
                  setNewMovieReview({
                    ...newMovieReview,
                    review: e.target.value,
                  });
                }}></textarea>
            </div>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default CreateForm;
