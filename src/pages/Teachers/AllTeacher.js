/** @format */

import React, { useContext, useEffect, useState } from "react";
import SchoolContext from "../../context/SchoolContext";
import NoTeacher from "./NoTeacher";
import SingleTeacher from "./SingleTeacher";
import Loading from "../../components/Loading";
import NotificationBox from "./NotificationBox";

function AllTeacher({ search }) {
  const { teacher } = useContext(SchoolContext);
  const [teacherId, setTeacherId] = useState();
  const [loading, setLoading] = useState(false);
  const [notifyId, setNotifyId] = useState(null);
  const [filteredTeacher, setFilteredTeacher] = useState([]);

  useEffect(() => {
    if (search) {
      const i = teacher?.filter((v) =>
        v?.teacherName?.toUpperCase().includes(search.toUpperCase())
      );
      setFilteredTeacher(i);
    } else {
      setFilteredTeacher(teacher);
    }
  }, [search, teacher]);

  const handleSendNotification = (id, message) => {
    setNotifyId(null);
    setLoading(true);
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
      .finally(() => setLoading(false));
  };

  return (
    <>
      <SingleTeacher
        teacherId={teacherId}
        setTeacherId={setTeacherId}
        setNotifyId={setNotifyId}
      />
      <Loading loading={loading} />
      <NotificationBox
        userId={notifyId}
        setUserId={setNotifyId}
        func={handleSendNotification}
      />
      {filteredTeacher.length ? (
        <div className="all-teacher">
          <ul
            style={{ backgroundColor: "#ffffff", fontWeight: "550" }}
            className="list-head"
          >
            <li>Teacher Name</li>
            <li>Subject</li>
            <li>Class</li>
            <li>Email address</li>
            <li>Gender</li>
          </ul>
          {filteredTeacher?.map((value, i) => {
            return (
              <ul
                key={i}
                style={{ backgroundColor: i % 2 === 0 ? "#e9f2fa" : "#ffffff" }}
                onClick={() => setTeacherId(value?._id)}
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
        <NoTeacher />
      )}
    </>
  );
}

export default AllTeacher;
