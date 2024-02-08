import { onSnapshot, query, where } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import { auth, moviesCollection } from "../firebase";
import "../styles/Shuffle.css";
import Input from "../components/Input";

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
    <div style={mainContainerStyle}>
      <div className="main-shuffle">
        <h1>Shuffle page</h1>
        {/* <Input /> */}
        <MultiSelect
          options={options}
          value={selected}
          onChange={setSelected}
          labelledBy="Select your friends"
          className="input-multiselect"
        />
      </div>
      {movies.map((movie) => {
        const randomLeftPosition = Math.random(window.innerWidth) * 1000;
        const randomTopPosition = Math.random(window.innerHeight) * 1000;
        console.log(randomLeftPosition, randomTopPosition);
        return (
          // https://codepen.io/christinastep/pen/eXypvq
          <p
            key={movie.id}
            style={{
              position: "absolute",
              left: `${randomLeftPosition}px`,
              top: `${randomTopPosition}px`,
              // backgroundColor: "red",
              // padding: "1rem",
              // borderRadius: "10px",
            }}>
            {movie.title}
          </p>
        );
      })}
    </div>
  );
};

export default Shuffle;
