import { onSnapshot, query, where } from "firebase/firestore";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import { auth, moviesCollection } from "../firebase";
import "../styles/Shuffle.css";
import Input from "../components/Input";

import Bubble from "../components/Bubble";

const Shuffle = () => {
  const [movies, setMovies] = useState([]);
  const totalMovies = movies.length;

  const options = [
    { label: "Grapes 🍇", value: "grapes" },
    { label: "Mango 🥭", value: "mango" },
    { label: "Strawberry 🍓", value: "strawberry", disabled: true },
  ];

  const [selected, setSelected] = useState([]);

  const styles = {
    backgroundColor: "red",
    position: "absolute",
    left: "500px",
    top: "500px",
  };
  const mainContainerStyle = {
    position: "relative",
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        const q = query(moviesCollection, where("createdBy", "==", uid));

        //fetch movies list
        onSnapshot(q, function (snapshot) {
          // sync up our local notes array with the snapshot data
          const moviesArr = snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setMovies(moviesArr);
        });
      }
    });
    return unsubscribe;
  }, []);
  return (
    <div className="shuffle-main-container">
      <div className="main-shuffle">
        {/* <h1>Shuffle</h1>
        <div className="mix-button">
          <i className="fa-brands fa-mixer"></i>
        </div> */}

        {/* <Input /> */}
        {/* <MultiSelect
          options={options}
          value={selected}
          onChange={setSelected}
          labelledBy="Select your friends"
          className="input-multiselect"
        /> */}
      </div>
      {movies.map((movie) => {
        return (
          // https://codepen.io/christinastep/pen/eXypvq
          <Bubble title={movie.title} key={movie.id} />
        );
      })}
    </div>
  );
};

export default Shuffle;
