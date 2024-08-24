/** @format */

import React, { useContext } from "react";
import StudentContext from "../../context/StudentContext";
import NoStudent from "./NoNotification";

function AllNotification() {
  const { notification, school, teacher } = useContext(StudentContext);

  return (
    <>
      {notification ? (
        <div className="notification-con">
          <ul>
            {notification?.reverse()?.map((value) => {
              const name =
                value?.fromCategory === "school"
                  ? school?.schoolName
                  : teacher?.filter((v) => v._id === value?.fromId)[0]?.teacherName;
              return (
                <li>
                  <p>
                    <b>{name}</b>
                  </p>
                  <p>{value.message}</p>
                  <small style={{ fontSize: "10px" }}>{value.date}</small>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <NoStudent />
      )}{" "}
    </>
  );
}

export default AllNotification;
