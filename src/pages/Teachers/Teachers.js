/** @format */

import React, { useState } from "react";
import ThirdNav from "../../components/ThirdNav";
import "./teacher.css";
import TeacherHeader from "./TeacherHeader";
import Search from "./Search";
import NewTeacher from "./NewTeacher";
import AllTeacher from "./AllTeacher";
import SchoolDropdown from "../../components/SchoolDropdown";

function Teachers() {
  const [newTeacher, setNewTeacher] = useState(false);
  const [search, setSearch] = useState(null)
  const [toggle, setToggle] = useState(false)

  return (
    <div className="teacher">
      <ThirdNav toggle={toggle} setToggle={setToggle} />
      <SchoolDropdown  toggle={toggle} setToggle={setToggle}/>
      <NewTeacher newTeacher={newTeacher} setNewTeacher={setNewTeacher} />
      <TeacherHeader setNewTeacher={setNewTeacher} />
      <br />
      <div className="teacher-con">
        <Search setSearch={setSearch}/>
        <br />
        <br />
        <AllTeacher search={search} />
      </div>
    </div>
  );
}

export default Teachers;
