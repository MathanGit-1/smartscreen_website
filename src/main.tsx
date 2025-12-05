/* src/main.tsx */
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import JobManagementPage from "./pages/JobManagementPage";
import CandidateManagementPage from "./pages/CandidateManagementPage";
import Layout from "./Layout";
import "./index.css";

ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {/* existing homepage */}
          <Route path="/" element={<App />} />

          {/* new feature page */}
          <Route
            path="/features/job-management"
            element={<JobManagementPage />}
          />
          <Route
            path="/features/candidate-intelligence"
            element={<CandidateManagementPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
