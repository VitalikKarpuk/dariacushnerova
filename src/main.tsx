import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { GroupsPage } from "./components/pages/groups/page";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GroupsPage />
  </React.StrictMode>
);
