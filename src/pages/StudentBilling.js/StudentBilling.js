/** @format */

import React from "react";
import ThirdNav from "../../components/ThirdNav";
import SchoolChargesHeader from "./StudentBillingHeader";
import AllBills from "./AllBills";
import "./schoolcharges.css";

function StudentBilling() {
  return (
    <div>
      <ThirdNav />
      <SchoolChargesHeader text={'School charges'} />
      <div className="billings">
        <AllBills />
      </div>
      <SchoolChargesHeader text={'Payment history'} />
    </div>
  );
}

export default StudentBilling;
