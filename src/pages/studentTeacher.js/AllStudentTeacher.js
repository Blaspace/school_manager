/** @format */

import React, { useContext, useState, useEffect } from "react";
import StudentContext from "../../context/StudentContext";
import NoStudentTeacher from "./NoStudentTeacher";
import SingleTeacher from "./SingleTeacher";
import NotificationBox from "./NotificationBox";
import Loading from "../../components/Loading";

function AllStudentTeacher({ search }) {
  const { teacher } = useContext(StudentContext);
  const [teacherId, setTeacherId] = useState(null);
  const [studentNotificationId, setStudentNotificationId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [filteredTeacher, setFilteredTeacher] = useState([]);

  useEffect(() => {
    if (search) {
      const i = teacher?.filter((v) =>
        v?.teacherName?.toUpperCase()?.includes(search.toUpperCase())
      );
      setFilteredTeacher(i);
    } else {
      setFilteredTeacher(teacher);
    }
  }, [search, teacher]);

  const handleSendNotification = (id, message) => {
    setStudentNotificationId(null);
    setLoading(true);
    fetch(`${process.env.REACT_APP_APIURL}/student/notify/${id}`, {
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
      .finally(() => setLoading(false));
  };

  return (
    <>
      <Loading loading={loading} />
      <SingleTeacher
        teacherId={teacherId}
        setTeacherId={setTeacherId}
        setNotify={setStudentNotificationId}
      />
      <NotificationBox
        func={handleSendNotification}
        setUserId={setStudentNotificationId}
        userId={studentNotificationId}
      />
      {filteredTeacher.length ? (
        <div className="all-teacher">
          <ul style={{ backgroundColor: "#ffffff", fontWeight: "550" }} className='list-head'>
            <li>Teacher Name</li>
            <li>Subject</li>
            <li>Class</li>
            <li>Teacher Email</li>
            <li>Gender</li>
          </ul>
          {filteredTeacher?.map((value, i) => {
            return (
              <ul
                key={i}
                style={{ backgroundColor: i % 2 === 0 ? "#e9f2fa" : "#ffffff" }}
                onClick={() => setTeacherId(value._id)}
                className="list-item"
              >
                <li data-name="Teacher Name">
                  <span>{value?.teacherName?.slice(0, 1).toUpperCase()}</span>{" "}
                  {value?.teacherName}
                </li>
                <li data-name="Subject">{value?.teacherSubject}</li>
                <li data-name="Class">{value?.teacherClass}</li>
                <li data-name="Teacher Email">{value?.teacherEmail}</li>
                <li data-name="Gender">{value?.teacherGender}</li>
              </ul>
            );
          })}
        </div>
      ) : (
        <NoStudentTeacher />
      )}
    </>
  );
}

export default AllStudentTeacher;
