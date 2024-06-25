import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./dashboard/pages/Dashboard";
import Faviorate from "./dashboard/pages/Faviorate";
import DashboardLayout from "./dashboard/DashboardLayout";
import Service from "./dashboard/pages/Services";
import Recipe from "./dashboard/pages/Recipe";
import Search from "./dashboard/pages/SearchRecipe";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "favourites",
        element: <Faviorate />,
      },
      {
        path: "search-recipe",
        element: <Search />,
      },
      {
        path: "services",
        children: [
          {
            path: "",
            element: <Service />,
          },
          {
            path: "Recipe",
            children: [
              {
                path: ":keyword",
                element: <Recipe />,
                loader: async ({ request, params }) => {
                  return fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${params.keyword}&app_id=${import.meta.env.VITE_API_APP_ID}&app_key=${import.meta.env.VITE_API_APP_KEY}`);
                },
              },
            ],
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
