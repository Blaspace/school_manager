/** @format */

import React, { useContext } from "react";
import { FaUsers, FaMoneyBill, FaChalkboardTeacher } from "react-icons/fa";
import SchoolContext from "../../context/SchoolContext";

function DashboardHeader() {
  return (
    <div className="dashboard-header">
      <div>
        <FaChalkboardTeacher size={50} />
        <p>Add teachers to your school</p>
      </div>
      <div>
        <FaUsers size={50} />
        <p>Added students to your school</p>
      </div>
      <div>
        <FaMoneyBill size={50} />
        <p>Add your custom billing</p>
      </div>
    </div>
  );
}

export default DashboardHeader;
