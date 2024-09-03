/** @format */

import React, { useContext, useState, useEffect } from "react";
import SchoolContext from "../../context/SchoolContext";
import NoStudent from "./NoStudent";
import SingleStudent from "./SingleStudent";
import NotificationBox from "./NotificationBox";
import Loading from '../../components/Loading'

function AllStudent({search}) {
  const { student } = useContext(SchoolContext);
  const [studentId, setStudentId] = useState(null);
  const [studentNotificationId, setStudentNotificationId] = useState(null);
  const [loading, setLoading] = useState(false)
  const [filteredStudent, setFilteredStudent] = useState([])
  useEffect(()=>{
    if(search){
    const i = student?.filter((v)=> v?.studentName.toUpperCase().includes(search.toUpperCase()))
    setFilteredStudent(i)
    }else{
      setFilteredStudent(student)
    }
  },[search, student])

  const handleSendNotification = (id, message) => {
    setStudentNotificationId(null)
    setLoading(true)
    fetch(`${process.env.REACT_APP_APIURL}/notify/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        message,
        toCategory: "student",
      }),
    })
      .then((res) => res.json())
      .then((data) => alert("Your message has been sent"))
      .finally(()=>setLoading(false))
  };

  return (
    <>
    <Loading loading={loading} setLoading={setLoading}/>
      <SingleStudent
        studentId={studentId}
        setStudentId={setStudentId}
        setNotify={setStudentNotificationId}
      />
      <NotificationBox
        userId={studentNotificationId}
        setUserId={setStudentNotificationId}
        func={handleSendNotification}
      />
      {filteredStudent?.length ? (
        <div className="all-teacher">
          <ul style={{ backgroundColor: "#ffffff", fontWeight: "550" }} className='list-head'>
            <li>Student Name</li>
            <li>Student ID</li>
            <li>Email address</li>
            <li>Class</li>
            <li>Gender</li>
          </ul>
          {filteredStudent?.map((value, i) => {
            return (
              <ul
                key={i}
                style={{ backgroundColor: i % 2 === 0 ? "#e9f2fa" : "#ffffff" }}
                onClick={() => setStudentId(value?._id)}
                className="list-item"
              >
                <li data-name="Student Name">
                  <span>{value?.studentName?.slice(0, 1).toUpperCase()}</span>{" "}
                  {value?.studentName}
                </li>
                <li data-name="Student ID">{value?.studentId}</li>
                <li data-name="Email address">{value?.studentEmail}</li>
                <li data-name="Class">{value?.studentClass}</li>
                <li data-name="Gender">{value?.studentGender}</li>
              </ul>
            );
          })}
        </div>
      ) : (
        <NoStudent />
      )}
    </>
  );
}

export default AllStudent;
