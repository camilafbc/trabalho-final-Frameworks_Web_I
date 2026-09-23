import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import RootLayout from "./RootLayout";
import MovieDetail from "./pages/Movie";
import Search from "./pages/Search";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "filme/:id", Component: MovieDetail },
      { path: "/buscar", Component: Search },
    ],
  },
]);
