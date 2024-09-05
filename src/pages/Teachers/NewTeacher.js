/** @format */

import React, { useContext, useState } from "react";
import SchoolContext from "../../context/SchoolContext";
import Loader from "../../components/Loading";

function NewTeacher({ newTeacher, setNewTeacher }) {
  const [teacherDeligation, setDeligation] = useState();
  const [password, setPassword] = useState();
  const [teacherName, setName] = useState();
  const [teacherEmail, setEmail] = useState();
  const [teacherGender, setGender] = useState();
  const [teacherClass, setTeacherClass] = useState();
  const [teacherPhoneNumber, setTeacherPhoneNumber] = useState();
  const [teacherSubject, setTeacherSubject] = useState();
  const [loading, setLoading] = useState(false);
  const { setTeacher, teacher } = useContext(SchoolContext);

  const handleNewTeacher = () => {
    if (
      teacherClass &&
      teacherDeligation &&
      teacherEmail &&
      teacherGender &&
      teacherName &&
      teacherPhoneNumber &&
      teacherSubject &&
      password
    ) {
      setLoading(true);
      setNewTeacher(false);
      fetch(`${process.env.REACT_APP_APIURL}/teacher/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          password,
          designation: teacherDeligation,
          teacherName,
          teacherEmail,
          teacherClass,
          teacherGender,
          teacherSubject,
          teacherPhoneNumber,
        }),
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((data) => setTeacher([...teacher, data]))
        .catch((err) => console.log(err))
        .finally(() => {
          setLoading(false);
        });
    } else {
      alert("all feilds required");
    }
  };
  return (
    <>
      <Loader loading={loading} />
      {newTeacher && (
        <div className="popup-con">
          <div className="new-student">
            <header style={{ justifyContent: "space-between" }}>
              <h1>Add Teacher</h1>
              <article>
                <label>Designation</label>
                <br />
                <select
                  type="text"
                  onChange={(e) => setDeligation(e.target.value)}
                >
                  <option value={null}>Select Deligation</option>
                  <option>General</option>
                  <option>Art</option>
                  <option>Science</option>
                  <option>Commercial</option>
                </select>
              </article>
            </header>
            <br />
            <div>
              <label>Teacher Name</label>
              <input
                type="text"
                placeholder="Teacher Name"
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
              <section>
                <div >
                  <br />
                  <label id="email">Email Address</label>
                  <input
                    type="email"
                    placeholder="Enter teacher email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <br />
                  <label>Password</label>
                  <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter teacher's password"
                  />
                </div>
                <div>
                  <br />
                  <span>
                    <select onChange={(e) => setGender(e.target.value)}>
                      <option value={null}>Gender</option>
                      <option>Male</option>
                      <option>Femail</option>
                    </select>
                    <select onChange={(e) => setTeacherClass(e.target.value)}>
                      <option value={null}>Class</option>
                      <option>JSS 1</option>
                      <option>JSS 2</option>
                      <option>JSS 3</option>
                      <option>SS 1</option>
                      <option>SS 2</option>
                      <option>SS 3</option>
                    </select>
                  </span>
                  <br />
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    onChange={(e) => setTeacherPhoneNumber(e.target.value)}
                    placeholder="Enter teacher's phone number"
                  />
                </div>
              </section>
              <br />
              <label>Teacher Subject</label>
              <input
                type="text"
                onChange={(e) => setTeacherSubject(e.target.value)}
                placeholder="Enter teacher's subject"
              />
            </div>
            <br />
            <span style={{ width: "40%" }}>
              <button onClick={handleNewTeacher}>Add Teacher</button>
              <button onClick={() => setNewTeacher(false)}>Cancil</button>
            </span>
          </div>
        </div>
      )}
    </>
  );
}

export default NewTeacher;
