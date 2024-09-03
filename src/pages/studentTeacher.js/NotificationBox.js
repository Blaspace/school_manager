/** @format */

import React, { useContext, useEffect, useState } from "react";
import TeacherContext from "../../context/TeacherContext";

function NotificationBox({func, userId, setUserId}) {
    const [message, setMessage] = useState()
    const [user, setUser] = useState([])
    const {student} = useContext(TeacherContext)

    useEffect(()=>{
      const i =student?.filter(v=> v?._id === userId)
      setUser(i)
    },[userId])
  return (
    <>
      {userId && (
        <div className="popup-con">
          <div className="notification-box">
            <br />
            <h3>Send a message to {user[0]?.studentName}</h3>
            <br />
            <textarea onChange={(e)=>setMessage(e.target.value)}/>
            <br />
            <br />
            <button className="btn" onClick={() => func(userId, message)}>
              Send
            </button>{" "}
            <button className="btn2" onClick={() => setUserId(null)}>
              Cancil
            </button>
            <br />
          </div>
        </div>
      )}
    </>
  );
}

export default NotificationBox;
