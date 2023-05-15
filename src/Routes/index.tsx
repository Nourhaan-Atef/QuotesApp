import { createBrowserRouter } from "react-router-dom";
import RouteLayout from "../Pages/RouteLayout/RouteLayout";
import Home from "../Pages/Home/Home";
import Favorites from "../Pages/Favorites/Favorites";
import Authors from "../Pages/Authors/AuthorsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RouteLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/fav", element: <Favorites /> },
      { path: "/authors", element: <Authors /> },
    ],
  },
]);
