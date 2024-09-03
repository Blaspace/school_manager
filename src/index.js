/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { SchoolProvider } from "./context/SchoolContext";
import { StudentProvider } from "./context/StudentContext";
import { TeacherProvider } from "./context/TeacherContext";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SchoolProvider>
      <TeacherProvider>
        <StudentProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </StudentProvider>
      </TeacherProvider>
    </SchoolProvider>
  </React.StrictMode>
);
