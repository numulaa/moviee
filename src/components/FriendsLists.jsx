import React, { useEffect } from "react";
import "../styles/FriendsLists.css";
import profilePic from "../assets/nurul-pic.jpeg";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { moviesCollection } from "../firebase";

const FriendLists = ({ movies, handleOpenMovieModal }) => {
  const handleCheckboxChange = async (id) => {
    const updatedMovie = {
      ...movies[id],
      isWatched: true,
    };
    try {
      const docRef = doc(moviesCollection, id);
      await updateDoc(docRef, updatedMovie);
    } catch (e) {
      console.error("Error updating document: ", e);
    }
  };
  const handleDeleteWatchList = async (id) => {
    await deleteDoc(doc(moviesCollection, id));
  };
  return (
    <div className="friends-list-wrapper">
      <div className="title-btn-wrapper">
        <h4>Watch List</h4>
        <button onClick={handleOpenMovieModal}>
          <i className="fa-regular fa-square-plus"></i>
        </button>
      </div>
      <ul className="friends-list">
        {/* {movies.map((friend) => (
          <li className="friends-list-item" key={friend.id}>
            <div className="friend-profile-pic">
              <img src={profilePic} />
            </div>
            {friend.username}
            <i className="fa-solid fa-circle"></i>
          </li>
        ))} */}
        {movies.map((movie) => (
          <li className="friends-list-item" key={movie.id}>
            <input
              id={movie.id}
              type="checkbox"
              value={movie.isWatched}
              onChange={() => handleCheckboxChange(movie.id)}
            />
            <label htmlFor={movie.id} className="to-watch-input">
              {movie.title}
            </label>
            <button onClick={() => handleDeleteWatchList(movie.id)}>
              <i class="fa-regular fa-trash-can"></i>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendLists;
