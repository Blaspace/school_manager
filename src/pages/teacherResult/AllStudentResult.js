/** @format */

import React, { useContext, useState } from "react";
import TeacherContext from "../../context/TeacherContext";

function AllStudentResult({ setStudentId }) {
  const { student, result } = useContext(TeacherContext);
  return (
    <div className="all-result">
      <div>
      <table>
        <ul>
          <li style={{ maxWidth: "50px", minWidth: "50px" }}>
            <b>.No</b>
          </li>
          <li>
            <b>Student Name</b>
          </li>
          <li style={{ maxWidth: "100px", minWidth: "100px" }}>
            <b>1st CA</b>
          </li>
          <li style={{ maxWidth: "100px", minWidth: "100px" }}>
            <b>2nd CA</b>
          </li>
          <li style={{ maxWidth: "100px", minWidth: "100px" }}>
            <b>3rd CA</b>
          </li>
          <li style={{ maxWidth: "100px", minWidth: "100px" }}>
            <b>Exam</b>
          </li>
          <li style={{ maxWidth: "100px", minWidth: "100px" }}>
            <b>Total</b>
          </li>
          <li style={{ maxWidth: "200px", minWidth: "200px" }}>
            <b>Actions</b>
          </li>
        </ul>
        {student.map((value, index) => {
          const r = result?.filter((v) => v?.studentId === value?._id);
          return (
            <ul>
              <li style={{ maxWidth: "50px", minWidth: "50px" }}>
                {index + 1}
              </li>
              <li style={{justifyContent:'flex-start'}}>{value?.studentName}</li>
              <li style={{ maxWidth: "100px", minWidth: "100px" }}>
                {!r?.length ? "--" : r[0]?.firstCA}
              </li>
              <li style={{ maxWidth: "100px", minWidth: "100px" }}>
                {!r?.length ? "--" : r[0]?.secondCA}
              </li>
              <li style={{ maxWidth: "100px", minWidth: "100px" }}>
                {!r?.length ? "--" : r[0]?.thirdCA}
              </li>
              <li style={{ maxWidth: "100px", minWidth: "100px" }}>
                {!r?.length ? "--" : r[0]?.exam}
              </li>
              <li style={{ maxWidth: "100px", minWidth: "100px" }}>
                {!r?.length
                  ? "--"
                  : r[0]?.firstCA + r[0]?.secondCA + r[0]?.thirdCA + r[0]?.exam}
              </li>
              <li style={{ maxWidth: "200px", minWidth: "200px" }}>
                <button
                  className="btn"
                  style={{ width: "80px", height: "30px",padding: 0 }}
                  onClick={() => setStudentId(value?._id)}
                >
                  Edit
                </button>
                <button
                  className="btn2"
                  style={{ width: "80px", height: "30px",padding: 0 }}
                >
                  Clear
                </button>
              </li>
            </ul>
          );
        })}
      </table>
      </div>
    </div>
  );
}

export default AllStudentResult;
