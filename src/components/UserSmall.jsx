import React from "react";
import "../styles/UserSmall.css";
import profilePic from "../assets/nurul-pic.jpeg";

const UserSmall = () => {
  return (
    <div className="user-small-container">
      <div className="user-profile-pic">
        <img src={profilePic} />
      </div>
      <div className="user-small-detail">
        <p>numulaa</p>
        <p>Nurul Mukhlisa</p>
      </div>
    </div>
  );
};

export default UserSmall;
