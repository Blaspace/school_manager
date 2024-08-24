/** @format */

import React, { useContext, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Loading from "../components/Loading";
import StudentContext from "../context/StudentContext";

function GetStudentResult() {
  const [loading, setLoading] = useState(false);
  const { setResult, result } = useContext(StudentContext);
  useEffect(() => {
    if (!result?.length) {
      setLoading(true);
      fetch(`${process.env.REACT_APP_APIURL}/student/result`, {
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

export default GetStudentResult;
