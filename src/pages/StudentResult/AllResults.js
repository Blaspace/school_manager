/** @format */

import React, { useContext, useState } from "react";
import StudentContext from "../../context/StudentContext";

function AllResult({ setStudentId }) {
  const { teacher, result } = useContext(StudentContext);
  return (
    <div className="all-result">
      <table>
        <ul>
          <li style={{ maxWidth: "50px", minWidth: "50px" }}>
            <b>.No</b>
          </li>
          <li>
            <b>Subject</b>
          </li>
          <li style={{ maxWidth: "130px", minWidth: "130px" }}>
            <b>1st CA</b>
          </li>
          <li style={{ maxWidth: "130px", minWidth: "130px" }}>
            <b>2nd CA</b>
          </li>
          <li style={{ maxWidth: "130px", minWidth: "130px" }}>
            <b>3rd CA</b>
          </li>
          <li style={{ maxWidth: "130px", minWidth: "130px" }}>
            <b>Exam</b>
          </li>
          <li style={{ maxWidth: "130px", minWidth: "130px" }}>
            <b>Total</b>
          </li>
          
        </ul>
        {teacher.map((value, index) => {
          const r = result?.filter((v) => v?.teacherId === value?._id);
          return (
            <ul>
              <li style={{ maxWidth: "50px", minWidth: "50px" }}>
                {index + 1}
              </li>
              <li>{value?.teacherSubject}</li>
              <li style={{ maxWidth: "130px", minWidth: "130px" }}>
                {!r?.length ? "--" : r[0]?.firstCA}
              </li>
              <li style={{ maxWidth: "130px", minWidth: "130px" }}>
                {!r?.length ? "--" : r[0]?.secondCA}
              </li>
              <li style={{ maxWidth: "130px", minWidth: "130px" }}>
                {!r?.length ? "--" : r[0]?.thirdCA}
              </li>
              <li style={{ maxWidth: "130px", minWidth: "130px" }}>
                {!r?.length ? "--" : r[0]?.exam}
              </li>
              <li style={{ maxWidth: "130px", minWidth: "130px" }}>
                {!r?.length
                  ? "--"
                  : r[0]?.firstCA + r[0]?.secondCA + r[0]?.thirdCA + r[0]?.exam}
              </li>
            </ul>
          );
        })}
      </table>
    </div>
  );
}

export default AllResult;
