/** @format */

import React, { useContext } from "react";
import StudentContext from "../../context/StudentContext";

function ProfileArea() {
  const { student } = useContext(StudentContext);
  return (
    <div className="student-profile">
      <br/>
      <p>{student?.studentId}</p>
      <span>{student?.studentName?.slice(0, 1)}</span>
      <br />
      <p>{student?.studentName}</p>
      <p style={{ color: "#cac8c8" }}>
        {`${student?.studentDesignaion} student`}
      </p>
      <br/>
      <div>
        <br/>
        <p>Email: {student?.studentEmail}</p>
        <p>Class: {student?.studentClass}</p>
        <p>Gender: {student?.studentGender}</p>
        <br/>
      </div>
      <br/>
      <form>
        <input type="password" placeholder="Enter a new Password"/>
        <br/>
        <br/>
        <input type="password" placeholder="Confirm new Password"/>
        <br/>
        <br/>
      </form>
      <button className="btn" style={{width:'100%', borderRadius: '10px'}}>Change password</button>
      <br/>
    </div>
  );
}

export default ProfileArea;
