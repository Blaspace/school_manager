/** @format */

import React, { useContext, useEffect, useState } from "react";
import Loading from "../components/Loading";
import { Outlet } from "react-router-dom";
import StudentContext from "../context/StudentContext";

function GetBillingAndPaymentHistory() {
  const [loading, setLoading] = useState(false);
  const { billing, setBilling } = useContext(StudentContext);
  useEffect(() => {
    if (!billing.length) {
      setLoading(true);
      fetch(`${process.env.REACT_APP_APIURL}/student/billing`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setBilling(data))
        .finally(() => setLoading(false));
    }
  }, []);
  return (
    <>
      <Loading loading={loading} setLoading={setLoading} />
      <Outlet />
    </>
  );
}

export default GetBillingAndPaymentHistory;
