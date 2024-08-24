/** @format */

import React, { useContext, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Loading from "../components/Loading";
import TeacherContext from "../context/TeacherContext";

function GetCurrentTeacher() {
  const [loading, setLoading] = useState(false);
  const { setTeacher, teacher } = useContext(TeacherContext);
  useEffect(() => {
    if (!teacher) {
      setLoading(true);
      fetch(`${process.env.REACT_APP_APIURL}/teacher/current`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setTeacher(data))
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

export default GetCurrentTeacher;
