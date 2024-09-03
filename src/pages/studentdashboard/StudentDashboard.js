/** @format */

import React, { useState } from "react";
import ProfileArea from "./ProfileArea";
import "./studentdashboard.css";
import ThirdNav from "../../components/ThirdNav";
import StudentDashbordBody from "./StudentDashbordBody";
import DashboardHeader from "./DashboardHeader";
import StudentDropdown from "../../components/StudentDropdown";

function StudentDashboard() {
  const [toggle, setToggle] = useState(false)
  return (
    <div>
      <ThirdNav  toggle={toggle} setToggle={setToggle} />
      <StudentDropdown toggle={toggle} setToggle={setToggle}/>
      <div className="student-dashboard">
        <ProfileArea />
        <div>
          <DashboardHeader />
          <StudentDashbordBody />
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
