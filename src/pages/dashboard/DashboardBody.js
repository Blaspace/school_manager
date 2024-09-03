/** @format */

import React from "react";
import { BsPersonAdd } from "react-icons/bs";

function DashboardBody() {
  return (
    <div className="dashboard-body-con">
      <div className="dashboard-body">
        <div>
          <BsPersonAdd size={50} />
          <section>
            <h1>Effortless Management</h1>
            <br />
            <p>
              Register and manage your school on our platform, add students and
              teachers, and assign them secure login credentials.
            </p>
          </section>
        </div>
        <div>
          <BsPersonAdd size={50} />
          <section>
            <h1>Customizable Billing</h1>
            <br />
            <p>
              Tailor your school’s billing processes to suit your needs, and
              easily notify students and teachers about payments and other
              important updates.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default DashboardBody;
