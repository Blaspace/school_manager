/** @format */

import { createContext, useState } from "react";

const StudentContext = createContext();
export const StudentProvider = ({ children }) => {
  const [student, setStudent] = useState();
  const [teacher, setTeacher] = useState([]);
  const [billing, setBilling] = useState([]);
  const [school, setSchool] = useState();
  const [material, setMaterial] = useState([])
  const [notification, setNotification] = useState([]);
  const [result, setResult] = useState([]);

  return (
    <StudentContext.Provider
      value={{
        student,
        setStudent,
        billing,
        setBilling,
        school,
        setSchool,
        teacher,
        setTeacher,
        notification,
        setNotification,
        result,
        setResult,material, setMaterial,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};

export default StudentContext;
