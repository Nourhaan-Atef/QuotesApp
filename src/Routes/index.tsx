import { createBrowserRouter } from "react-router-dom";
import RouteLayout from "../Pages/RouteLayout/RouteLayout";
import Home from "../Pages/Home/Home";
import Favorites from "../Pages/Favorites/Favorites";
import Authors from "../Pages/Authors/AuthorsPage";
import QuoteDetails from "../Pages/QuoteDetails/QuoteDetails";
import AuthorDetails from "../Pages/AuthorDetails/AuthorDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RouteLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/fav", element: <Favorites /> },
      { path: "/fav/quote/:id/details", element: <Favorites /> },
      { path: "/authors", element: <Authors /> },
      { path: "quote/:id/details", element: <QuoteDetails /> },
      { path: "/author/:id/details", element: <AuthorDetails /> },
      { path: "/author/:id/details/quote/:id/details", element: <QuoteDetails /> },
      

    ],
  },
]);
