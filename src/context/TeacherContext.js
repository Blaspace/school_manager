/** @format */

import { createContext, useState } from "react";

const TeacherContext = createContext();
export const TeacherProvider = ({ children }) => {
  const [student, setStudent] = useState([]);
  const [teacher, setTeacher] = useState()
  const [school, setSchool] = useState();
  const [notification, setNotification] = useState([])
  const [result, setResult] = useState([])

  return (
    <TeacherContext.Provider
      value={{ student, setStudent, school, setSchool, teacher, setTeacher, notification, setNotification,result, setResult }}
    >
      {children}
    </TeacherContext.Provider>
  );
};

export default TeacherContext;
