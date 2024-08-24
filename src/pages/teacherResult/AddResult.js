/** @format */

import React, { useContext, useEffect, useState } from "react";
import TeacherContext from "../../context/TeacherContext";
import Loading from "../../components/Loading";

function AddResult({ id, setId }) {
  const [firstCA, setFirstCA] = useState();
  const [secondCA, setSecondCA] = useState();
  const [thirdCA, setThirdCA] = useState();
  const [exam, setExam] = useState();
  const [user, setUser] = useState([]);
  const [loading, setLoading] =useState(false)
  const { student, setResult, result } = useContext(TeacherContext);

  const handleUploadResult = () => {
    if (firstCA && secondCA && thirdCA && exam) {
      setLoading(true)
      setId(null)
      fetch(`${process.env.REACT_APP_APIURL}/teacher/result`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          studentId: id,
          firstCA,
          secondCA,
          thirdCA,
          exam,
        }),
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((data) => {
          setResult([...result, data]);
          alert("result uploaded");
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setId(null);
          setLoading(false);
        });
    } else {
      alert("something went wrong");
    }
  };

  useEffect(() => {
    setUser(student?.filter((v) => v._id === id));
  }, [id]);

  return (
    <>
            <Loading loading={loading}/>
      {id && (
        <div className="popup-con">
          <div className="add-result">
            <br />
            <p>
              Upload <b>{user[0]?.studentName}</b>'s results
            </p>
            <div>
              <section>
                <br />
                <input
                  type="number"
                  placeholder="Enter first CA score"
                  onChange={(e) => setFirstCA(e.target.value)}
                />
                <br />
                <br />
                <input
                  type="number"
                  placeholder="Enter third CA score"
                  onChange={(e) => setThirdCA(e.target.value)}
                />
                <br />
                <br />
                <button className="btn" onClick={handleUploadResult}>
                  Upload
                </button>{" "}
                <button className="btn2" onClick={() => setId(null)}>
                  Cancil
                </button>
              </section>
              <section>
                <br />
                <input
                  type="number"
                  placeholder="Enter second CA score"
                  onChange={(e) => setSecondCA(e.target.value)}
                />
                <br />
                <br />
                <input
                  type="number"
                  placeholder="Enter exam score"
                  onChange={(e) => setExam(e.target.value)}
                />
                <br />
                <br />
              </section>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AddResult;
