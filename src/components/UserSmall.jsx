import React from "react";
import "../styles/UserSmall.css";
import profilePic from "../assets/nurul-pic.jpeg";

const UserSmall = ({ userEmail, displayName, photoURL }) => {
  return (
    <div className="user-small-container">
      <div className="user-profile-pic">
        <img src={photoURL || profilePic} />
      </div>
      <div className="user-small-detail">
        <p>{displayName || "Some Name"}</p>
        <p>{userEmail}</p>
      </div>
    </div>
  );
};

export default UserSmall;
