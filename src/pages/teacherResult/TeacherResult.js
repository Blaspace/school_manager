/** @format */

import React, {useState} from "react";
import ThirdNav from "../../components/ThirdNav";
import StudentBillingHeade from "../StudentBilling.js/StudentBillingHeader";
import "./result.css";
import AllStudentResult from "./AllStudentResult";
import AddResult from "./AddResult";
import TeacherDropdown from "../../components/TeacherDropdown";

function TeacherResult() {
  const [studentId, setStudentId] = useState(null)
const [toggle, setToggle] = useState(false)
  return (
    <div>
      <ThirdNav toggle={toggle} setToggle={setToggle} />
      <TeacherDropdown toggle={toggle} setToggle={setToggle}/>
      <AddResult id={studentId} setId={setStudentId}/>
      <StudentBillingHeade text={"Upload student result"} />
      <AllStudentResult setStudentId={setStudentId}/>
    </div>
  );
}

export default TeacherResult;
