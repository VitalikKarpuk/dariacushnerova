import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Programs } from "./components/pages/programs.tsx";
import {NewApp} from "./components/pages/newApp/NewApp.tsx";
import App from "./App.tsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <NewApp />,
  },
  {
    path: "/programs",
    element: <Programs />,
  },
  {
    path: "/group",
    element: <App />
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
