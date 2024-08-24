/** @format */

import React, { useContext, useEffect, useState } from "react";
import SchoolContext from "../../context/SchoolContext";

function SingleStudent({ studentId, setStudentId, setNotify }) {
  const { student } = useContext(SchoolContext);
  const [newTeacher, setNewTeacher] = useState([]);
  useEffect(() => {
    const i = student?.filter((v) => v._id === studentId);
    setNewTeacher(i);
  }, [studentId]);
  return (
    <>
      {studentId && (
        <div className="popup-con">
          <div className="student-details">
            <br />
            <div>
              <span>
              <p>{newTeacher[0]?.studentName.slice(0,1)}</p>
              </span>
              <section>
              <p><b>{newTeacher[0]?.studentName}</b></p><br/>
              <p>{newTeacher[0]?.studentDesignaion} student</p>
              </section>
            </div>
            <br />
            <div>
            <section>
              <p>Email: {newTeacher[0]?.studentEmail}</p><br/>
              <p>Phone No: {newTeacher[0]?.studentPhoneNumber}</p>
            </section>
            <section>
              <p>Gender: {newTeacher[0]?.studentGender}</p><br/>
              <p>Class: {newTeacher[0]?.studentClass}</p>
            </section>
            </div>
            <div>
              <button className="btn" onClick={()=>{
                setNotify(newTeacher[0]?._id)
                setStudentId(null)
              }}>Notify</button>
              <button className="btn2" onClick={()=>{setStudentId(null)}}>Cancil</button>
            </div>
            <br />
          </div>
        </div>
      )}
    </>
  );
}

export default SingleStudent;
