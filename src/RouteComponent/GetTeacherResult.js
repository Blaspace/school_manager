/** @format */

import React, { useContext, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Loading from "../components/Loading";
import TeacherContext from "../context/TeacherContext";

function GetTeacherResult() {
  const [loading, setLoading] = useState(false);
  const { setResult, result } = useContext(TeacherContext);
  useEffect(() => {
    if (!result?.length) {
      setLoading(true);
      fetch(`${process.env.REACT_APP_APIURL}/teacher/result`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setResult(data))
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

export default GetTeacherResult;
