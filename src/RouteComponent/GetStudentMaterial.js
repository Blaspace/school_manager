/** @format */

import React, { useContext, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Loading from "../components/Loading";
import StudentContext from "../context/StudentContext";

function GetStudentMaterial() {
  const [loading, setLoading] = useState(false);
  const { setMaterial, material } = useContext(StudentContext);
  useEffect(() => {
    if (!material?.length) {
      setLoading(true);
      fetch(`${process.env.REACT_APP_APIURL}/student/material`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setMaterial(data))
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

export default GetStudentMaterial;
