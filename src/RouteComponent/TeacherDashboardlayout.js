/** @format */

import React from "react";
import { Outlet } from "react-router-dom";
import TeacherSideBar from "../components/TeacherDashboardSidebar";

const TeacherDashboardRoute = () => {
  return (
    <div className="dashboard-con">
      <TeacherSideBar />
      <div className="dashboard-content">
        <Outlet />
      </div>
    </div>
  );
};

export default TeacherDashboardRoute;
