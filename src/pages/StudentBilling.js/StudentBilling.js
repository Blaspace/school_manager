/** @format */

import React, { useState } from "react";
import ThirdNav from "../../components/ThirdNav";
import SchoolChargesHeader from "./StudentBillingHeader";
import AllBills from "./AllBills";
import "./schoolcharges.css";
import StudentDropdown from "../../components/StudentDropdown";

function StudentBilling() {
  const [toggle, setToggle] = useState(false)
  return (
    <div>
      <ThirdNav toggle={toggle} setToggle={setToggle} />
      <StudentDropdown toggle={toggle} setToggle={setToggle}/> 
      <SchoolChargesHeader text={'School charges'} />
      <div className="billings">
        <AllBills />
      </div>
      <SchoolChargesHeader text={'Payment history'} />
    </div>
  );
}

export default StudentBilling;
