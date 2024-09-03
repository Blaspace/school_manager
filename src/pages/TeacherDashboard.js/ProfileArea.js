/** @format */

import React, { useContext, useState } from "react";
import TeacherContext from "../../context/TeacherContext";
import Loading from '../../components/Loading'
import { IoCameraSharp } from "react-icons/io5";

function ProfileArea() {
  const { teacher, setTeacher } = useContext(TeacherContext);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (e) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("logo", e[0]);

    fetch(`${process.env.REACT_APP_APIURL}/teacher/image`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: formData,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => setTeacher({ ...teacher, image: data.logo }))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  return (
    <div className="student-profile">
      <Loading loading={loading}/>
      <br />
      <p>{teacher?.teacherId}</p>
      {teacher?.image ? (
        <span style={{ backgroundColor: "#ffffff" }}>
          <img src={teacher?.image} />
          <small>
            <IoCameraSharp size={20} color="#ffffff" />
            <input
              type="file"
              onChange={(e) => handleImageUpload(e.target.files)}
            />
          </small>
        </span>
      ) : (
        <span>
          {teacher?.teacherName?.slice(0, 1)}
          <small>
            <IoCameraSharp size={20} color="#ffffff" />
            <input
              type="file"
              onChange={(e) => handleImageUpload(e.target.files)}
            />
          </small>
        </span>
      )}
      <br />
      <p>{teacher?.teacherName}</p>
      <p style={{ color: "#cac8c8" }}>
        {teacher?.teacherSubject + " " + "teacher"}
      </p>
      <br />
      <div>
        <br />
        <p>Email: {teacher?.teacherEmail}</p>
        <p>Class: {teacher?.teacherClass}</p>
        <p>Gender: {teacher?.teacherGender}</p>
        <br />
      </div>
      <br />
      <form>
        <input type="password" placeholder="Enter a new Password" />
        <br />
        <br />
        <input type="password" placeholder="Confirm new Password" />
        <br />
        <br />
      </form>
      <button className="btn" style={{ width: "100%", borderRadius: "10px" }}>
        Change password
      </button>
      <br />
    </div>
  );
}

export default ProfileArea;
