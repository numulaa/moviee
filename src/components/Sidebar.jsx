import React from "react";
import "../styles/Sidebar.css";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1>THis Movie</h1>
      <ul className="sidebar-list">
        <li className="sidebar-list-items">
          <NavLink
            to="/"
            className="sidebar-list-items"
            style={({ isActive, isPending, isTransitioning }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isPending ? "red" : "",
                viewTransitionName: isTransitioning ? "slide" : "",
              };
            }}>
            <i className="fa-solid fa-house"></i>
            <p>Home</p>
          </NavLink>
        </li>
        <li className="sidebar-list-items">
          <NavLink
            to="/search"
            className="sidebar-list-items"
            style={({ isActive, isPending, isTransitioning }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isPending ? "red" : "",
                viewTransitionName: isTransitioning ? "slide" : "",
              };
            }}>
            <i className="fa-solid fa-magnifying-glass"></i>
            <p>Search</p>
          </NavLink>
        </li>
        <li className="sidebar-list-items">
          <NavLink
            to="/messages"
            className="sidebar-list-items"
            style={({ isActive, isPending, isTransitioning }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isPending ? "red" : "",
                viewTransitionName: isTransitioning ? "slide" : "",
              };
            }}>
            <i className="fa-regular fa-message"></i>
            <p>Messages</p>
          </NavLink>
        </li>
        <li className="sidebar-list-items">
          <NavLink
            to="/shuffle"
            className="sidebar-list-items"
            style={({ isActive, isPending, isTransitioning }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isPending ? "red" : "",
                viewTransitionName: isTransitioning ? "slide" : "",
              };
            }}>
            <i className="fa-regular fa-bell"></i>
            <p>Shuffle</p>
          </NavLink>
        </li>
        <li className="sidebar-list-items">
          <NavLink
            to="/create"
            className="sidebar-list-items"
            style={({ isActive, isPending, isTransitioning }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isPending ? "red" : "",
                viewTransitionName: isTransitioning ? "slide" : "",
              };
            }}>
            <i className="fa-regular fa-square-plus"></i>
            <p>Add Review</p>
          </NavLink>
        </li>

        <li className="sidebar-list-items">
          <NavLink
            to="/profile"
            className="sidebar-list-items"
            style={({ isActive, isPending, isTransitioning }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isPending ? "red" : "",
                viewTransitionName: isTransitioning ? "slide" : "",
              };
            }}>
            <i className="fa-regular fa-user"></i>
            <p>Profile</p>
          </NavLink>
        </li>
      </ul>
      <Footer />
    </div>
  );
};

export default Sidebar;
