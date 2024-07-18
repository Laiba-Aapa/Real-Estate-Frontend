import Layout from "./components/Layout/Layout";
import DetailPage from "./routes/DetailPage/DetailPage";
import HomePage from "./routes/Homepage/HomePage";
import ListPage from "./routes/ListPage/Listpage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "./routes/ProfilePage/Profile";
import Login from "./routes/Login/Login";
import Register from "./routes/Register/Register";

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
        },
        {
          path: "/:id",
          element: <DetailPage />,
        },
        {
          path: "/profile",
          element: <Profile />,
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
  ]);
  return <RouterProvider router={router} />;
}

export default App;

// react leaflet
// scss , sass
// react-router-dom
