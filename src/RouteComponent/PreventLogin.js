/** @format */

import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PreventLogin = () => {
  return (
    <>
      {localStorage.getItem("token") &&
      localStorage.getItem("token") !== "undefined" &&
      localStorage.getItem("user") === "school" ? (
        <Navigate to={"../../dashboard"} />
      ) : localStorage.getItem("token") &&
        localStorage.getItem("token") !== "undefined" &&
        localStorage.getItem("user") === "student" ? (
        <Navigate to={"studentdashboard"} />
      ) : (localStorage.getItem("token") &&
      localStorage.getItem("token") !== "undefined" &&
      localStorage.getItem("user") === "teacher") ? (
      <Navigate to={"teacherdashboard"} />
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default PreventLogin;
