/** @format */

import React, { useContext, useState } from "react";
import StudentContext from "../../context/StudentContext";
import NoStudentTeacher from "./NoStudentTeacher";
import SingleTeacher from "./SingleTeacher";

function AllStudentTeacher() {
  const { teacher } = useContext(StudentContext);
  const [ teacherId, setTeacherId] = useState(null)
  
  return (
    <>
    <SingleTeacher teacherId={teacherId} setTeacherId={setTeacherId}/>
    {teacher.length ? <div className="all-teacher">
      <ul style={{ backgroundColor: "#ffffff", fontWeight: "550" }}>
        <li>Teacher Name</li>
        <li>Subject</li>
        <li>Class</li>
        <li>Email address</li>
        <li>Gender</li>
      </ul>
      {teacher?.map((value, i) => {
        return (
          <ul
            key={i}
            style={{ backgroundColor: i % 2 === 0 ? "#e9f2fa" : "#ffffff" }}
            onClick={()=>setTeacherId(value._id)}
          >
            <li><span>{value?.teacherName?.slice(0,1).toUpperCase()}</span> {value?.teacherName}</li>
            <li>{value?.teacherSubject}</li>
            <li>{value?.teacherClass}</li>
            <li>{value?.teacherEmail}</li>
            <li>{value?.teacherGender}</li>
          </ul>
        );
      })}
    </div>: <NoStudentTeacher/>}
    </>
  );
}

export default AllStudentTeacher;
