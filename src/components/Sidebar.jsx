import React from "react";
import "../styles/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1>Moviee</h1>
      <ul className="sidebar-list">
        <li className="sidebar-list-items">
          <i className="fa-solid fa-house"></i>
          <p>Home</p>
        </li>
        <li className="sidebar-list-items">
          <i className="fa-solid fa-magnifying-glass"></i>
          <p>Search</p>
        </li>
        <li className="sidebar-list-items">
          <i className="fa-regular fa-message"></i>
          <p>Messages</p>
        </li>
        <li className="sidebar-list-items">
          <i className="fa-regular fa-bell"></i>
          <p>Notifications</p>
        </li>
        <li className="sidebar-list-items">
          <i className="fa-regular fa-square-plus"></i>
          <p>Create</p>
        </li>
        <li className="sidebar-list-items">
          <i className="fa-regular fa-user"></i>
          <p>Profile</p>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
