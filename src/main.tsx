import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home.js";
import "./index.css";
import About from "./components/About.js";
import ProjectGrid from "./components/ProjectGrid/ProjectGrid.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "projects",
    element: <ProjectGrid />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
