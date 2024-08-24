/** @format */

import React, { useContext, useState} from "react";
import SchoolContext from "../../context/SchoolContext";
import NoTeacher from "./NoTeacher";
import SingleTeacher from "./SingleTeacher";
import Loading from "../../components/Loading";
import NotificationBox from "./NotificationBox";

function AllTeacher() {
    const {teacher} = useContext(SchoolContext)
    const [teacherId, setTeacherId] = useState()
    const [loading, setLoading] = useState(false)
    const [notifyId, setNotifyId] = useState(null)

    const handleSendNotification = (id, message) => {
      setNotifyId(null)
      setLoading(true)
      fetch(`${process.env.REACT_APP_APIURL}/notify/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          message,
          toCategory: "teacher",
        }),
      })
        .then((res) => res.json())
        .then((data) => alert("Your message has been sent"))
        .finally(()=>setLoading(false))
    };

  return (
    <>
    <SingleTeacher teacherId={teacherId} setTeacherId={setTeacherId} setNotifyId={setNotifyId}/>
    <Loading loading={loading}/>
    <NotificationBox userId={notifyId} setUserId={setNotifyId} func={handleSendNotification}/>
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
            onClick={()=>setTeacherId(value?._id)}
          >
            <li><span>{value?.teacherName?.slice(0,1).toUpperCase()}</span> {value?.teacherName}</li>
            <li>{value?.teacherSubject}</li>
            <li>{value?.teacherClass}</li>
            <li>{value?.teacherEmail}</li>
            <li>{value?.teacherGender}</li>
          </ul>
        );
      })}
    </div>: <NoTeacher/>}
    </>
  );
}

export default AllTeacher;
