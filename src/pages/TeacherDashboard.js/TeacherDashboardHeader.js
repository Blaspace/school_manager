import React from 'react'
import { FaMoneyBill, FaChalkboardTeacher,  } from "react-icons/fa";
import { GrDocument } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';

function TeacherHeader() {
  const navigate = useNavigate()
  return (
    <div  className="dashboard-header">
      <div onClick={()=>navigate('../../../teacher/dashboard/result')}>
        <FaChalkboardTeacher size={50} />
        <p>Upload student result</p>
      </div>
      <div onClick={()=>navigate('../../../teacher/dashboard/material')}>
      <GrDocument size={50}/>
        <p>Upload study materials</p>
      </div>
      </div>
  )
}

export default TeacherHeader
