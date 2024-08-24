/** @format */

import React, { useContext } from "react";
import TeacherContext from "../../context/TeacherContext";
import NoStudent from "./NoNotification";

function AllNotification() {
  const { notification, school, student } = useContext(TeacherContext);

  return (
    <>
      {notification?.length ? (
        <div className="notification-con">
          <ul>
            {notification?.map((value) => {
              const name =
                value?.fromCategory === "school"
                  ? school?.schoolName
                  : student?.filter((v) => v._id === value?.fromId)[0];

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
