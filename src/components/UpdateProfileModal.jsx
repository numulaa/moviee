import React, { useState } from "react";
import Input from "./Input";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import "../styles/UpdateProfileModal.css";

const UpdateProfileModal = ({ handleCloseModal }) => {
  const [newDisplayName, setNewDisplayName] = useState("");
  const [newPhotoURL, setNewPhotoURL] = useState("");
  const handleSubmitUpdateProfile = (e) => {
    e.preventDefault();
    updateProfile(auth.currentUser, {
      displayName: newDisplayName,
      photoURL: newPhotoURL,
    })
      .then(() => {
        console.log("Profile updated");
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="modal-main-container">
      <div className="update-modal-container">
        <div
          onClick={handleCloseModal}
          className="update-modal-close-button-wrapper">
          X
        </div>
        <h1>Update Profile</h1>
        <form
          onSubmit={handleSubmitUpdateProfile}
          className="update-profile-form">
          <Input
            id="new-display-name"
            label="New Display Name"
            type="text"
            value={newDisplayName}
            required={false}
            onChange={(e) => {
              setNewDisplayName(e.target.value);
            }}
          />
          <Input
            id="new-photoURL"
            label="New Photo URL"
            type="text"
            value={newPhotoURL}
            required={false}
            onChange={(e) => {
              setNewPhotoURL(e.target.value);
            }}
          />
          <button className="btn update-profile-btn">Update Profile</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfileModal;
