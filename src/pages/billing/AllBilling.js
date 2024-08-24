/** @format */

import React, { useContext } from "react";
import SchoolContext from "../../context/SchoolContext";
import { FaPen } from "react-icons/fa6";

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
              <FaPen size={16} />
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
