/** @format */

import React, { useContext } from "react";
import { FaUsers, FaMoneyBill, FaChalkboardTeacher,  } from "react-icons/fa";
import SchoolContext from "../../context/SchoolContext";
import { GrDocument } from "react-icons/gr";

function DashboardHeader() {
  const {student, teacher, billing} = useContext(SchoolContext)
  return (
    <div className="dashboard-header">
        
      <div>
        <FaChalkboardTeacher size={50} />
        <p>Check your result</p>
      </div>
      <div>
      <GrDocument size={50}/>
        <p>Get study materials</p>
      </div>
      <div>
        <FaMoneyBill size={50} />
        <p>Make payments</p>
      </div>
    </div>
  );
}

export default DashboardHeader;
