/** @format */

import React, { useContext, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Loading from "../components/Loading";
import TeacherContext from "../context/TeacherContext";

function GetTeacherNotification() {
  const [loading, setLoading] = useState(false);
  const { setNotification, notification } = useContext(TeacherContext);
  useEffect(() => {
    if (!notification?.length) {
      setLoading(true);
      fetch(`${process.env.REACT_APP_APIURL}/teacher/notification`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setNotification(data))
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

export default GetTeacherNotification;
