import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Messages from "./pages/messages.jsx";
import Post from "./components/Post.jsx";
import DefaultMessage from "./components/DefaultMessage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import PostDetail from "./pages/PostDetail.jsx";
import CreateForm from "./pages/Create.jsx";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      // children: [{ path: "/messages", element: <Messages /> }],
    },
    {
      path: "/messages",
      element: <Messages />,
      children: [{ index: true, element: <DefaultMessage /> }],
    },
    {
      path: "/post/:id",
      element: <PostDetail />,
      children: [{ index: true, element: <DefaultMessage /> }],
    },
    {
      path: "/create",
      element: <CreateForm />,
      children: [{ index: true, element: <DefaultMessage /> }],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
