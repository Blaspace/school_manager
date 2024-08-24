/** @format */

import React, { useContext } from "react";
import TeacherContext from "../../context/TeacherContext";

function ProfileArea() {
  const {teacher} = useContext(TeacherContext);
  
  return (
    <div className="student-profile">
      <br />
      <p>{teacher?.teacherId}</p>
      <span>{teacher?.teacherName?.slice(0, 1)}</span>
      <br />
      <p>{teacher?.teacherName}</p>
      <p style={{ color: "#cac8c8" }}>
        {teacher?.teacherSubject + " " + "teacher"}
      </p>
      <br />
      <div>
        <br />
        <p>Email: {teacher?.teacherEmail}</p>
        <p>Class: {teacher?.teacherClass}</p>
        <p>Gender: {teacher?.teacherGender}</p>
        <br />
      </div>
      <br />
      <form>
        <input type="password" placeholder="Enter a new Password" />
        <br />
        <br />
        <input type="password" placeholder="Confirm new Password" />
        <br />
        <br />
      </form>
      <button className="btn" style={{ width: "100%", borderRadius: "10px" }}>
        Change password
      </button>
      <br />
    </div>
  );
}

export default ProfileArea;
