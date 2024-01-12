import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "../styles/Messages.css";
import profilePic from "../assets/nurul-pic.jpeg";

const Messages = () => {
  const messages = [
    {
      id: 1,
      username: "xihailuo",
      gender: "male",
      friendsId: [2, 3],
      isOnline: true,
      messages: "hello, nurul",
    },
    {
      id: 2,
      username: "bomba",
      gender: "male",
      friendsId: [1, 3],
      isOnline: true,
      messages: "hello, nurul",
    },
    {
      id: 3,
      username: "jiss",
      gender: "female",
      friendsId: [1, 2],
      isOnline: true,
      messages: "hello, nurul",
    },
    {
      id: 4,
      username: "nrlmkhlisa",
      gender: "female",
      friendsId: [1, 2, 3],
      isOnline: true,
      messages: "hello, nurul",
    },
  ];
  return (
    <section className="messages-main-section">
      <Sidebar />
      <section className="friends-chat">
        <h3>Messages</h3>
        <ul className="messages-list">
          {messages.map((message) => (
            <li className="messages-list-items">
              <div className="messages-friend-profile-pic">
                <img src={profilePic} />
              </div>
              <p> {message.username}</p>
              <i className="fa-solid fa-circle"></i>
            </li>
          ))}
        </ul>
      </section>
      <main className="chatbox">
        <p>Hello, this is the chat box</p>
      </main>
    </section>
  );
};

export default Messages;
