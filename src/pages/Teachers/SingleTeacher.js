/** @format */

import React, { useContext, useEffect, useState } from "react";
import SchoolContext from "../../context/SchoolContext";

function SingleTeacher({ teacherId, setTeacherId, setNotifyId }) {
  const { teacher } = useContext(SchoolContext);
  const [newTeacher, setNewTeacher] = useState([]);
  useEffect(() => {
    const i = teacher?.filter((v) => v._id === teacherId);
    setNewTeacher(i);
    console.log(i);
  }, [teacherId]);
  return (
    <>
      {teacherId && (
        <div className="popup-con">
          <div className="student-details">
            <br />
            <div>
              <span>
              <p>{newTeacher[0]?.teacherName.slice(0,1)}</p>
              </span>
              <section>
              <p><b>{newTeacher[0]?.teacherName}</b></p><br/>
              <p>{newTeacher[0]?.teacherSubject} teacher</p>
              </section>
            </div>
            <br />
            <div>
            <section>
              <p>Email: {newTeacher[0]?.teacherEmail}</p><br/>
              <p>Phone No: {newTeacher[0]?.teacherPhoneNumber}</p>
            </section>
            <section>
              <p>Designation: {newTeacher[0]?.designation}</p><br/>
              <p>Class: {newTeacher[0]?.teacherClass}</p>
            </section>
            </div>
            <div>
              <button className="btn" onClick={()=>{
                setNotifyId(newTeacher[0]?._id)
                setTeacherId(null)
                }} >Notify</button>
              <button className="btn2" onClick={()=>{setTeacherId(null)}}>Cancil</button>
            </div>
            <br />
          </div>
        </div>
      )}
    </>
  );
}

export default SingleTeacher;
