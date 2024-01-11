import React from "react";
import "../styles/FriendsLists.css";
import profilePic from "../assets/nurul-pic.jpeg";

const FriendLists = ({ friends }) => {
  return (
    <div className="friends-list-wrapper">
      <h4>Friends</h4>
      <ul className="friends-list">
        {friends.map((friend) => (
          <li className="friends-list-item" key={friend.id}>
            <div className="friend-profile-pic">
              <img src={profilePic} />
            </div>
            {friend.username}
            <i className="fa-solid fa-circle"></i>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendLists;
