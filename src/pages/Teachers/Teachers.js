/** @format */

import React, { useState } from "react";
import ThirdNav from "../../components/ThirdNav";
import "./teacher.css";
import TeacherHeader from "./TeacherHeader";
import Search from "./Search";
import NewTeacher from "./NewTeacher";
import AllTeacher from "./AllTeacher";

function Teachers() {
  const [newTeacher, setNewTeacher] = useState(false);

  return (
    <div className="teacher">
      <ThirdNav />
      <NewTeacher newTeacher={newTeacher} setNewTeacher={setNewTeacher} />
      <TeacherHeader setNewTeacher={setNewTeacher} />
      <br />
      <div className="teacher-con">
        <Search />
        <br />
        <br />
        <AllTeacher />
      </div>
    </div>
  );
}

export default Teachers;
