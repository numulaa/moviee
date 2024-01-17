import React, { useState } from "react";
import profilePic from "../assets/nurul-pic.jpeg";
import UpdateProfileModal from "./UpdateProfileModal";

import "../styles/ProfileDetail.css";

const ProfileDetail = ({ displayName, photoURL, email, handleSignOut }) => {
  const [isShowingEditModal, setIsShowingEditModal] = useState(false);
  const handleEditProfile = () => {
    setIsShowingEditModal(true);
    console.log("edit profile");
  };
  const handleCloseModal = () => {
    setIsShowingEditModal(false);
  };

  return (
    <div className="profile-detail-cotainer">
      <div className="profile-detail-img-container">
        <img src={photoURL || profilePic} />
      </div>
      <div className="profile-detail-details-container">
        <h3>{displayName || "some name"}</h3>
        <p>{email}</p>
        <div className="profile-detail-btn-wrapper">
          <button onClick={handleEditProfile} className="logout-btn">
            Edit Profile
          </button>
          <button onClick={handleSignOut} className="logout-btn">
            Logout
          </button>
        </div>
      </div>
      {isShowingEditModal && (
        <UpdateProfileModal handleCloseModal={handleCloseModal} />
      )}
    </div>
  );
};

export default ProfileDetail;
