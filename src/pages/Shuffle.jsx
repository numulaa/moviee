import { onSnapshot, query, where } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth, moviesCollection } from "../firebase";

const Shuffle = () => {
  const [movies, setMovies] = useState([]);
  const totalMovies = movies.length;
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
      <h1>Shuffle page</h1>
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
            }}>
            {movie.title}
          </p>
        );
      })}
    </div>
  );
};

export default Shuffle;
