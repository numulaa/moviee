import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import "../styles/Layout.css";

const Layout = () => {
  return (
    <div className="layout-main-container">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Layout;
