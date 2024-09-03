import React from 'react'
import { FaMoneyBill, FaChalkboardTeacher,  } from "react-icons/fa";
import { GrDocument } from "react-icons/gr";

function TeacherHeader() {
  return (
    <div  className="dashboard-header">
      <div>
        <FaChalkboardTeacher size={50} />
        <p>Upload student result</p>
      </div>
      <div>
      <GrDocument size={50}/>
        <p>Upload study materials</p>
      </div>
      </div>
  )
}

export default TeacherHeader
