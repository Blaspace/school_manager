/** @format */

import React, { useContext, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Loading from "../components/Loading";
import StudentContext from "../context/StudentContext";

function GetStudentSchool() {
  const [loading, setLoading] = useState(false);
  const { setSchool, school } = useContext(StudentContext);
  useEffect(() => {
    if (!school) {
      setLoading(true);
      fetch(`${process.env.REACT_APP_APIURL}/student/school`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setSchool(data))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, []);
  return (
    <>
      <Loading loading={loading} />
      <Outlet />
    </>
  );
}

export default GetStudentSchool;
