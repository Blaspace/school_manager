/** @format */

import React, { useState } from "react";
import ThirdNav from "../../components/ThirdNav";
import Heading from "../StudentBilling.js/StudentBillingHeader";
import AllMaterials from "./AllMaterials";
import './teacherMaterial.css'
import TeacherDropdown from "../../components/TeacherDropdown";

function TeacherMaterials() {
  const [toggle, setToggle] =useState(false)
  return (
    <div>
      <ThirdNav toggle={toggle} setToggle={setToggle} />
      <TeacherDropdown toggle={toggle} setToggle={setToggle}/>
      <Heading text={"Upload study materials for your student"} />
      <AllMaterials/>
    </div>
  );
}

export default TeacherMaterials;
