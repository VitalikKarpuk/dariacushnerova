import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { Layout } from "./components/Layout";
import { GroupsPage } from "./components/pages/groups/page";
import { Programs } from "./components/pages/programs";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<GroupsPage />} />
          <Route path="programs" element={<Programs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
