import React, { useState } from "react";
import Input from "./Input";
import "../styles/FormModal.css";
import { auth, moviesCollection } from "../firebase";
import { addDoc, serverTimestamp } from "firebase/firestore";

const FormModal = ({ handleCloseModal }) => {
  const [movie, setMovie] = useState("");
  const handleAddMovie = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    const newMovie = {
      title: movie,
      isWatched: false,
      createdBy: user.uid,
      createdAt: serverTimestamp(),
    };
    try {
      const docRef = await addDoc(moviesCollection, newMovie);
      console.log("new movie added, with ID:", docRef.id);
      setMovie("");
      handleCloseModal();
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <div className="modal-main-container">
      <div className="form-modal-container">
        <div
          onClick={handleCloseModal}
          className="form-modal-close-button-wrapper">
          X
        </div>
        <h1>Add New Movie to Watch</h1>
        <form onSubmit={handleAddMovie}>
          <Input
            id="new-movie-title"
            type="text"
            value={movie}
            required={true}
            onChange={(e) => setMovie(e.target.value)}
            placeholder="Movie title ..."
          />
          <button className="btn form-movie-btn">Save</button>
        </form>
      </div>
    </div>
  );
};

export default FormModal;
