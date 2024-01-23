import React, { useState } from "react";
import Input from "../components/Input";

const WatchList = () => {
  const [movie, setMovie] = useState("");
  return (
    <>
      <h1>A new movie i want to watch</h1>
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
