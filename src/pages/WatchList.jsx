import React, { useState } from "react";
import Input from "../components/Input";

const WatchList = () => {
  const [movie, setMovie] = useState("");
  return (
    <>
      <h1>Add a new movie to WatchList</h1>
      <form>
        <Input
          label="Title"
          id="movie-title"
          type="text"
          value={movie}
          required={true}
          onChange={(e) => {
            setMovie(e.target.value);
          }}
        />
      </form>
    </>
  );
};

export default WatchList;
