/** @format */

import React, { useState } from "react";
import ThirdNav from "../../components/ThirdNav";
import StudentBillingHeader from "../StudentBilling.js/StudentBillingHeader";
import AllResult from "./AllResults";
import StudentDropdown from "../../components/StudentDropdown";

function StudentResult() {
  const [toggle, setToggle] =useState(false)
  return (
    <div>
      <ThirdNav toggle={toggle} setToggle={setToggle} />
      <StudentDropdown toggle={toggle} setToggle={setToggle}/>
      <StudentBillingHeader text={"Your results"} />
      <AllResult />
    </div>
  );
}

export default StudentResult;
