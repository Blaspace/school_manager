/** @format */

import React, { useContext, useState } from "react";
import StudentContext from "../../context/StudentContext";
import { IoCameraSharp } from "react-icons/io5";
import Loading from "../../components/Loading";

function ProfileArea() {
  const { student, setStudent } = useContext(StudentContext);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (e) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("logo", e[0]);

    fetch(`${process.env.REACT_APP_APIURL}/student/image`, {
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
      .then((data) => setStudent({ ...student, image: data.logo }))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  return (
    <div className="student-profile">
      <Loading loading={loading} />
      <br />
      <p>{student?.studentId}</p>
      {student?.image ? (
        <span style={{ backgroundColor: "#ffffff" }}>
          <img src={student?.image} />
          <small>
            <IoCameraSharp size={20} color="#ffffff" />
            <input
              type="file"
              accept="image"
              onChange={(e) => handleImageUpload(e.target.files)}
            />
          </small>
        </span>
      ) : (
        <span>
          {student?.studentName?.slice(0, 1)}
          <small>
            <IoCameraSharp size={20} color="#ffffff" />
            <input
              type="file"
              accept="image"
              onChange={(e) => handleImageUpload(e.target.files)}
            />
          </small>
        </span>
      )}
      <br />
      <p>{student?.studentName}</p>
      <p style={{ color: "#cac8c8" }}>
        {`${student?.studentDesignaion} student`}
      </p>
      <br />
      <div>
        <br />
        <p>Email: {student?.studentEmail}</p>
        <p>Class: {student?.studentClass}</p>
        <p>Gender: {student?.studentGender}</p>
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
