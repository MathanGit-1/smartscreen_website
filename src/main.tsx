// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import JobManagementPage from "./pages/JobManagementPage";
import CandidateManagementPage from "./pages/CandidateManagementPage";
import ApplicationsPage from "./pages/ApplicationsPage";
import AssistantPage from "./pages/AssistantPage";
import UseCasesPage from "./pages/UseCasesPage";
import Layout from "./Layout";
import "./index.css";

ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* 🔹 everything inside Layout gets Navbar + footer */}
        <Route element={<Layout />}>
          {/* existing homepage */}
          <Route path="/" element={<App />} />

          {/* feature pages */}
          <Route
            path="/features/job-management"
            element={<JobManagementPage />}
          />
          <Route
            path="/features/candidate-intelligence"
            element={<CandidateManagementPage />}
          />
          <Route
            path="/features/applications"
            element={<ApplicationsPage />}   // 🔹 NEW
          />
          <Route
            path="/features/assistant"
            element={<AssistantPage />}   // 🔹 NEW
          />
          <Route
            path="/use-cases"
            element={<UseCasesPage />}   // 🔹 NEW
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
