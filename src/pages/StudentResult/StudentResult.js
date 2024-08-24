/** @format */

import React from "react";
import ThirdNav from "../../components/ThirdNav";
import StudentBillingHeader from "../StudentBilling.js/StudentBillingHeader";
import AllResult from "./AllResults";

function StudentResult() {
  return (
    <div>
      <ThirdNav />
      <StudentBillingHeader text={"Your results"} />
      <AllResult />
    </div>
  );
}

export default StudentResult;
