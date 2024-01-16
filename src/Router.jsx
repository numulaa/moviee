import React from "react";
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

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="messages" element={<Messages />} />
          <Route path="create" element={<CreateForm />} />
          <Route path="post/:id" element={<PostDetail />} />
          <Route path="search" element={<Search />}>
            <Route index element={<SearchFriend />} />
            <Route path="friend" element={<SearchFriend />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
