import React, { useState } from "react";

import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import App from "./pages/Home.jsx";
import Messages from "./pages/Messages.jsx";
import Post from "./components/Post.jsx";
import DefaultMessage from "./components/DefaultMessage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import PostDetail from "./pages/PostDetail.jsx";
import CreateForm from "./pages/Create.jsx";
import Search from "./pages/search/Search.jsx";
import SearchFriend from "./pages/search/SearchFriend.jsx";
import Login from "./pages/Login.jsx";
import Profile from "./pages/Profile.jsx";
import UpdatePost from "./pages/UpdatePost.jsx";
import WatchList from "./components/WatchList.jsx";
import Shuffle from "./pages/Shuffle.jsx";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="search" element={<Search />}>
            <Route index element={<SearchFriend />} />
            <Route path="friend" element={<SearchFriend />} />
          </Route>
          <Route path="messages" element={<Messages />} />
          <Route path="shuffle" element={<Shuffle />} />
          <Route path="create" element={<CreateForm />} />
          <Route path="list" element={<WatchList />} />
          <Route path="post/:id" element={<PostDetail />} />
          <Route path="update/:id" element={<UpdatePost />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;

// const Router = () => {
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <App />,
//       errorElement: <ErrorPage />,
//       // children: [{ path: "/messages", element: <Messages /> }],
//     },
//     {
//       path: "/messages",
//       element: <Messages />,
//       children: [{ index: true, element: <DefaultMessage /> }],
//     },
//     {
//       path: "/post/:id",
//       element: <PostDetail />,
//       children: [{ index: true, element: <DefaultMessage /> }],
//     },
//     {
//       path: "/create",
//       element: <CreateForm />,
//       children: [{ index: true, element: <DefaultMessage /> }],
//     },
//   ]);
//   return <RouterProvider router={router} />;
// };
