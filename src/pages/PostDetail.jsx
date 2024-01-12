import React from "react";
import { useParams } from "react-router-dom";

const PostDetail = () => {
  const { id } = useParams();
  return (
    <>
      <p>{id}</p>
      <p>Hello this is the detail post</p>
    </>
  );
};

export default PostDetail;
