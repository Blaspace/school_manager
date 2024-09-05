/** @format */

import React from "react";
import { FaMoneyBill, FaChalkboardTeacher,  } from "react-icons/fa";
import { GrDocument } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

function DashboardHeader() {
  const navigate = useNavigate()
  return ( 
    <div  className="dashboard-header">
      <div onClick={()=>navigate('../../../student/dashboard/result')}>
        <FaChalkboardTeacher size={50} />
        <p>Check your result</p>
      </div>
      <div onClick={()=>navigate('../../../student/dashboard/materials')}>
      <GrDocument size={50}/>
        <p>Get study materials</p>
      </div>
      <div onClick={()=>navigate('../../../student/dashboard/billing')}>
        <FaMoneyBill size={50} />
        <p>Make payments</p>
      </div>
      </div>
  );
}

export default DashboardHeader;
