/** @format */

import React from "react";
import { Outlet } from "react-router-dom";
import StudentDashboardSidebar from "../components/StudentDashBoardSideBar";

const StudentDashboardRoute = () => {
  return (
    <div className="dashboard-con">
      <StudentDashboardSidebar />
      <div className="dashboard-content">
        <Outlet />
      </div>
    </div>
  );
};

export default StudentDashboardRoute;
