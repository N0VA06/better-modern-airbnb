
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import PropertyDetail from "./pages/PropertyDetail";
import NotFound from "./pages/NotFound";
import Listings from "./pages/Listings";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/properties",
    element: <Properties />,
  },
  {
    path: "/listings",
    element: <Listings />,
  },
  {
    path: "/property/:id",
    element: <PropertyDetail />,
  },
  {
    path: "*",
    element: <NotFound />,
  }
]);
