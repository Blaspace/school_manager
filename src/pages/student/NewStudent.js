/** @format */

import React, { useState, useContext } from "react";
import SchoolContext from "../../context/SchoolContext";
import Loading from "../../components/Loading";

function NewStudent({ newStudent, setNewStudent }) {
  const [studentDesignaion, setDesignation] = useState();
  const [password, setPassword] = useState();
  const [studentName, setStudentName] = useState();
  const [studentEmail, setStudentEmail] = useState();
  const [studentGender, setStudentGender] = useState();
  const [studentClass, setStudentClass] = useState();
  const [studentPhoneNumber, setStudentPhoneNumber] = useState();
  const [loading, setLoading] = useState(false);
  const { setStudent, student } = useContext(SchoolContext);

  const handleAddStudent = () => {
    if (
      studentClass &&
      password &&
      studentDesignaion &&
      studentEmail &&
      studentGender &&
      studentName &&
      studentPhoneNumber
    ) {
      setLoading(true);
      setNewStudent(false);
      fetch(`${process.env.REACT_APP_APIURL}/student/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          password,
          studentName,
          studentClass,
          studentGender,
          studentPhoneNumber,
          studentEmail,
          studentDesignaion,
        }),
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((data) => {
          setStudent([...student, data]);
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      alert("all feilds required");
    }
  };

  return (
    <>
      <Loading loading={loading} />
      {newStudent && (
        <div className="popup-con">
          <div className="new-student">
            <header style={{ justifyContent: "space-between" }}>
              <h1>Add Student</h1>
              <article>
                <label>Designation</label>
                <br />
                <select
                  type="text"
                  onChange={(e) => setDesignation(e.target.value)}
                >
                  <option value={null}>Select Deligation</option>
                  <option>Art</option>
                  <option>Science</option>
                  <option>Commercial</option>
                </select>
              </article>
            </header>
            <br />
            <div>
              <label>Student Name</label>
              <input
                type="text"
                placeholder="Enter student Name"
                name="name"
                onChange={(e) => setStudentName(e.target.value)}
              />
              <section>
                <div >
                  <br />
                  <label id="email">Email Address</label>
                  <input
                    type="email"
                    placeholder="Enter student email"
                    name="email"
                    onChange={(e) => setStudentEmail(e.target.value)}
                  />
                  <br />
                  <br />
                  <label>Password</label>
                  <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter student password"
                  />
                </div>
                <div>
                  <br />
                  <br />
                  <span>
                    <select onChange={(e) => setStudentGender(e.target.value)}>
                      <option>Gender</option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                    <select onChange={(e) => setStudentClass(e.target.value)}>
                      <option>Class</option>
                      <option>JSS 1</option>
                      <option>JSS 2</option>
                      <option>JSS 3</option>
                      <option>SS 1</option>
                      <option>SS 2</option>
                      <option>SS 3</option>
                    </select>
                  </span>
                  <br />
                  <br />
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    onChange={(e) => setStudentPhoneNumber(e.target.value)}
                    placeholder="Enter student Phone Number"
                  />
                </div>
              </section>
            </div>
            <br />
            <span style={{ width: "40%" }}>
              <button onClick={handleAddStudent}>Add Student</button>
              <button onClick={() => setNewStudent(false)}>Cancil</button>
            </span>
          </div>
        </div>
      )}
    </>
  );
}

export default NewStudent;
