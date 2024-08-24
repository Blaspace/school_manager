/** @format */

import { createContext, useState } from "react";

const SchoolContext = createContext();
export const SchoolProvider = ({ children }) => {
  const [school, setSchool] = useState();
  const [teacher, setTeacher] = useState([]);
  const [student, setStudent] = useState([]);
  const [billing, setBilling] = useState([])
  const [notification, setNotification]= useState([])

  
  return (
    <SchoolContext.Provider
      value={{ school, setSchool, teacher, setTeacher, student, setStudent, billing, setBilling, notification, setNotification }}
    >
      {children}
    </SchoolContext.Provider>
  );
};

export default SchoolContext;
