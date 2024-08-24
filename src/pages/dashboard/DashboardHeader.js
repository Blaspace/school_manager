/** @format */

import React, { useContext } from "react";
import { FaUsers, FaMoneyBill, FaChalkboardTeacher } from "react-icons/fa";
import SchoolContext from "../../context/SchoolContext";

function DashboardHeader() {
  const {student, teacher, billing} = useContext(SchoolContext)
  return (
    <div className="dashboard-header">
      <div>
        <FaChalkboardTeacher size={50} />
        <p>You have added:<br/> {teacher?.length} teacher</p>
      </div>
      <div>
        <FaUsers size={50} />
        <p>You have added:<br/> {student?.length} students</p>
      </div>
      <div>
        <FaMoneyBill size={50} />
        <p>You have:<br/> {billing?.length} new payments</p>
      </div>
    </div>
  );
}

export default DashboardHeader;
