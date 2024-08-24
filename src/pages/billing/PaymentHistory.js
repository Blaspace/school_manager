/** @format */

import React, { useContext } from "react";
import SchoolContext from "../../context/SchoolContext";

function BillingHistory() {
  const { student } = useContext(SchoolContext);
  
  return (
    <div className="payment-history">
      <ul style={{ backgroundColor: "#ffffff", fontWeight: "550" }}>
        <li>Student Name</li>
        <li>Student ID</li>
        <li>Class</li>
        <li>Payment</li>
      </ul>
      <br/>
      {student?.map((value, i) => {
        return (
          <ul
            key={i}
            style={{ backgroundColor: i % 2 === 0 ? "#e9f2fa" : "#ffffff" }}
          >
            <li>
              {value?.studentName}
            </li>
            <li>{value?.studentId}</li>
            <li>{value?.studentClass}</li>
            <li>{value?.studentGender}</li>
          </ul>
        );
      })}
    </div>

  );
}

export default BillingHistory;
