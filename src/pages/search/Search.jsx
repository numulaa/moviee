import React from "react";
import { Outlet } from "react-router-dom";

const Search = () => {
  return (
    <div>
      <h1>Search page goes here</h1>
      <Outlet />
    </div>
  );
};

export default Search;
