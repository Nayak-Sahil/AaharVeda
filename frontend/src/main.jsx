import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Dashboard from "./dashboard/pages/Dashboard";
import Faviorate from "./dashboard/pages/Faviorate";
import DashboardLayout from "./dashboard/DashboardLayout";
import Service from "./dashboard/pages/Services";
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
        element: <Dashboard />
      },
      {
        path: "favourites",
        element: <Faviorate />
      },
      {
        path: "services",
        element: <Service />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
