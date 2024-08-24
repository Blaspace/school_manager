/** @format */

import React, { useContext, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Loading from "../components/Loading";
import TeacherContext from "../context/TeacherContext";

function GetTeacherSchool() {
  const [loading, setLoading] = useState(false);
  const { setSchool, school } = useContext(TeacherContext);
  useEffect(() => {
    if (!school) {
      setLoading(true);
      fetch(`${process.env.REACT_APP_APIURL}/teacher/school`, {
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

export default GetTeacherSchool;
