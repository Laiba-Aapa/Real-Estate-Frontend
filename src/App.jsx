import { Layout, RequireAuth } from "./components/Layout/Layout";
import DetailPage from "./routes/DetailPage/DetailPage";
import HomePage from "./routes/Homepage/HomePage";
import ListPage from "./routes/ListPage/Listpage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "./routes/ProfilePage/Profile";
import Login from "./routes/Login/Login";
import Register from "./routes/Register/Register";
import ProfileUpdatePage from "./routes/ProfileUpdatePage/ProfileUpdatePage";
import NewPostPage from "./routes/NewPostPage/NewPostPage";
import {
  listPageLoader,
  profilePageLoader,
  SinglePageLoader,
} from "./lib/loader.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          index: true,
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
          loader: listPageLoader,
        },
        {
          path: "/:id",
          element: <DetailPage />,
          loader: SinglePageLoader,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "/profile",
          element: <Profile />,
          loader: profilePageLoader,
        },
        {
          path: "/profile/update",
          element: <ProfileUpdatePage />,
        },
        {
          path: "/add",
          element: <NewPostPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

// react leaflet
// scss , sass
// react-router-dom
