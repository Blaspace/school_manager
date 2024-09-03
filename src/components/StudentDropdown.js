/** @format */

import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

function StudentDropdown({ toggle, setToggle }) {
  return (
    <div className="drop-down" style={{ height: toggle ? "300px" : 0 }}>
      <ul>
        <NavLink
          to={"/studentdashboard"}
          id="navlink"
          ocClick={() => setToggle(!toggle)}
          className={({ isActive }) => {
            return isActive ? "domant" : "domant";
          }}
        >
          <span>Dashboard</span>
        </NavLink>
        <NavLink
          to={"../../student/dashboard/teacher"}
          ocClick={() => setToggle(!toggle)}
          id="navlink"
          className={({ isActive }) => {
            return isActive ? "domant" : "domant";
          }}
        >
          <span>Teachers</span>
        </NavLink>
        <NavLink
          to={"../../student/dashboard/result"}
          ocClick={() => setToggle(!toggle)}
          id="navlink"
          className={({ isActive }) => {
            return isActive ? "domant" : "domant";
          }}
        >
          <span>Results</span>
        </NavLink>
        <NavLink
          to={"../../student/dashboard/billing"}
          ocClick={() => setToggle(!toggle)}
          id="navlink"
          className={({ isActive }) => {
            return isActive ? "domant" : "domant";
          }}
        >
          {" "}
          <span>Payments</span>
        </NavLink>
        <NavLink
          to={"../../student/dashboard/materials"}
          ocClick={() => setToggle(!toggle)}
          id="navlink"
          className={({ isActive }) => {
            return isActive ? "domant" : "domant";
          }}
        >
          <span>Materials</span>
        </NavLink>
        <NavLink
          to={"../../student/dashboard/notification"}
          ocClick={() => setToggle(!toggle)}
          id="navlink"
          className={({ isActive }) => {
            return isActive ? "domant" : "domant";
          }}
        >
          {" "}
          <span>Notifications</span>
        </NavLink>
      </ul>
    </div>
  );
}

export default StudentDropdown;
