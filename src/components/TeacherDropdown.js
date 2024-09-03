/** @format */

import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

function TeacherDropdown({ toggle, setToggle }) {
  return (
    <div className="drop-down" style={{ height: toggle ? "300px" : 0 }}>
      <ul>
        <NavLink
          to={"../../../teacherdashboard"}
          id="navlink"
          onClick={() => setToggle(!toggle)}
          className={({ isActive }) => {
            return isActive ? "domant" : "domant";
          }}
        >
          <span>Dashboard</span>
        </NavLink>
        <NavLink
          to={"../../../teacher/dashboard/student"}
          onClick={() => setToggle(!toggle)}
          id="navlink"
          className={({ isActive }) => {
            return isActive ? "domant" : "domant";
          }}
        >
          {" "}
          <span>Student</span>
        </NavLink>
        <NavLink
          to={"../../../teacher/dashboard/result"}
          onClick={() => setToggle(!toggle)}
          id="navlink"
          className={({ isActive }) => {
            return isActive ? "domant" : "domant";
          }}
        >
          <span>Results</span>
        </NavLink>
        <NavLink
          to={"../../../teacher/dashboard/material"}
          onClick={() => setToggle(!toggle)}
          id="navlink"
          className={({ isActive }) => {
            return isActive ? "domant" : "domant";
          }}
        >
          <span>Materials</span>
        </NavLink>
        <NavLink
          to={"../../../teacher/dashboard/notification"}
          onClick={() => setToggle(!toggle)}
          id="navlink"
          className={({ isActive }) => {
            return isActive ? "domant" : "domant";
          }}
        >
          <span>Notifications</span>
        </NavLink>
      </ul>
    </div>
  );
}

export default TeacherDropdown;
