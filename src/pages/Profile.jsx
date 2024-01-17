import React, { useEffect, useState } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import ProfileDetail from "../components/ProfileDetail";
import "../styles/Profile.css";

const Profile = () => {
  const navigate = useNavigate();
  const [photoURL, setPhotoURL] = useState(null);
  const [displayName, setDisplayName] = useState(null);
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const photoURL = user.photoURL;
        const email = user.email;
        const displayName = user.displayName;
        // const emailVerified = user.emailVerified;
        setPhotoURL(photoURL);
        setDisplayName(displayName);
        setUserEmail(email);
      } else {
        navigate("/login");
      }
    });
  }, [auth]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="profile-main-container">
      <ProfileDetail
        displayName={displayName}
        photoURL={photoURL}
        email={userEmail}
        handleSignOut={handleSignOut}
      />
    </div>
  );
};

export default Profile;
