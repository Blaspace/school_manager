/** @format */

import React, { useState } from "react";
import ProfileArea from "./ProfileArea";
import "./teacherdashboard.css";
import ThirdNav from "../../components/ThirdNav";
import TeacherDashbordBody from "./TeacherDashboardBody";
import DashboardHeader from "./TeacherDashboardHeader";
import TeacherDropdown from "../../components/TeacherDropdown";

function TeacherDashboard() {
  const [toggle, setToggle] = useState(false)
  return (
    <div>
      <ThirdNav toggle={toggle} setToggle={setToggle} />
      <TeacherDropdown toggle={toggle} setToggle={setToggle}/>
      <div className="student-dashboard">
        <ProfileArea />
        <div className='side'>
          <DashboardHeader />
          <TeacherDashbordBody />
        </div>
      </div>
    </div>
  );
}

export default TeacherDashboard;
