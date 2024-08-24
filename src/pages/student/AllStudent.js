/** @format */

import React, { useContext, useState } from "react";
import SchoolContext from "../../context/SchoolContext";
import NoStudent from "./NoStudent";
import SingleStudent from "./SingleStudent";
import NotificationBox from "./NotificationBox";
import Loading from '../../components/Loading'

function AllStudent() {
  const { student } = useContext(SchoolContext);
  const [studentId, setStudentId] = useState(null);
  const [studentNotificationId, setStudentNotificationId] = useState(null);
  const [loading, setLoading] = useState(false)

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
      {student?.length ? (
        <div className="all-teacher">
          <ul style={{ backgroundColor: "#ffffff", fontWeight: "550" }}>
            <li>Student Name</li>
            <li>Student ID</li>
            <li>Email address</li>
            <li>Class</li>
            <li>Gender</li>
          </ul>
          {student?.map((value, i) => {
            return (
              <ul
                key={i}
                style={{ backgroundColor: i % 2 === 0 ? "#e9f2fa" : "#ffffff" }}
                onClick={() => setStudentId(value?._id)}
              >
                <li>
                  <span>{value?.studentName?.slice(0, 1).toUpperCase()}</span>{" "}
                  {value?.studentName}
                </li>
                <li>{value?.studentId}</li>
                <li>{value?.studentEmail}</li>
                <li>{value?.studentClass}</li>
                <li>{value?.studentGender}</li>
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
