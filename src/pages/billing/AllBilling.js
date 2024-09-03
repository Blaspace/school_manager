/** @format */

import React, { useContext } from "react";
import SchoolContext from "../../context/SchoolContext";

function AllBilling() {
  const { billing } = useContext(SchoolContext);
  return (
    <>
    <div className="all-billing-header">
      <p>All your billings</p>
    </div>
    <div className="all-billing">
      {billing?.map((value) => {
        return (
          <div key={value?._id}>
            <article>
              <p>{value.title}</p>
            </article>
            <p>
              <b>${value?.amount}</b>
            </p>
          </div>
        );
      })}
    </div>
    </>
  );
}

export default AllBilling;
