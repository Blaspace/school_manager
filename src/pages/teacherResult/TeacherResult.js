/** @format */

import React, {useState} from "react";
import ThirdNav from "../../components/ThirdNav";
import StudentBillingHeade from "../StudentBilling.js/StudentBillingHeader";
import "./result.css";
import AllStudentResult from "./AllStudentResult";
import AddResult from "./AddResult";

function TeacherResult() {
  const [studentId, setStudentId] = useState(null)

  return (
    <div>
      <ThirdNav />
      <AddResult id={studentId} setId={setStudentId}/>
      <StudentBillingHeade text={"Upload student result"} />
      <AllStudentResult setStudentId={setStudentId}/>
    </div>
  );
}

export default TeacherResult;
